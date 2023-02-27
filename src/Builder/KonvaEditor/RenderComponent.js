import React from "react";
import {Rect, Star, Image, Circle, Text, Transformer} from "react-konva";
const components = {
    rectangle: Rect,
    circle: Circle,
    text: Text,
    star: Star,
    image: Image,
};

const generateStyle = (style = {}) => {
    if (style._size !== undefined) {
        style.width = style._size;
        style.height = style._size;
    }
    if (style._src !== undefined) {
        const img = new window.Image();
        img.src = style._src;

        style.image = img;
    }

    return {...style};
};

const RenderComponent = ({element, isSelected, onSelect, onChange}) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected && trRef.current) {
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
                ref={shapeRef}
                {...generateStyle(element.data)}
                draggable
                onDragEnd={(e) => {
                    onChange({
                        ...generateStyle(element.data),
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onDragMove={(e) => {
                    e.target.x(Math.round(e.target.x() / 5) * 5);
                    e.target.y(Math.round(e.target.y() / 5) * 5);
                }}
                onTransformEnd={(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...generateStyle(element.data),
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
