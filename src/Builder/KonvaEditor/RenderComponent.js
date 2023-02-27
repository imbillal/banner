import React from "react";
import {Rect, Star, Circle, Text, Transformer} from "react-konva";
import URLImage from "./RenderImage";
const components = {
    Rect,
    Circle,
    Text,
    Star,
    Image: URLImage,
};

const generateStyle = (style = {}) => {
    if (style._size !== undefined) {
        style.width = style._size;
        style.height = style._size;
    }

    return {...style};
};

const RenderComponent = ({element, isSelected, onSelect, onChange}) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected && trRef.current) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    const Component = components[element.className];

    if (!Component) return null;

    return (
        <React.Fragment>
            <Component
                onClick={onSelect}
                ref={shapeRef}
                {...generateStyle(element.attrs)}
                draggable
                onDragEnd={(e) => {
                    onChange({
                        ...generateStyle(element.attrs),
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
                        ...generateStyle(element.attrs),
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
