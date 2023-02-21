import React from "react";
import {Rect, Star, Circle, Text, Transformer} from "react-konva";
const components = {
    rectangle: Rect,
    circle: Circle,
    text: Text,
    star: Star,
};
const RenderComponent = ({element, isSelected, onSelect, onChange}) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    const Component = components[element.component];
    if (!Component) return null;

    return (
        <React.Fragment>
            <Component
                onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                {...element.data}
                draggable
                onDragEnd={(e) => {
                    onChange({
                        ...element.data,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransformEnd={(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...element.data,
                        x: node.x(),
                        y: node.y(),
                        // set minimal value
                        width: Math.max(5, node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                    });
                }}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </React.Fragment>
    );
};

export default RenderComponent;
