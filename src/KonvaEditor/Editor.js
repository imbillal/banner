import React, {useContext, useRef} from "react";
import {Stage, Layer, Rect, Star, Circle, Text, Transformer} from "react-konva";
import RenderComponent from "./RenderComponent";
import {defaultElements} from "../Elements/elementResorce";
import {EditorContext} from "../context/elementContext";

function KonvaEditor() {
    const {state, canvasRef, handleUpdateState} = useContext(EditorContext);
    // const [elements, setElements] = React.useState([defaultElements.text]);
    const [elementId, setElementId] = React.useState(null);
    // const stageRef = useRef();

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setElementId(null);
        }
    };
    // const handleExport = () => {

    // };
    return (
        <div>
            KonvaEditor
            <Stage
                className="custom-konva-stage"
                ref={canvasRef}
                {...state.canvasStyle}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
            >
                <Layer>
                    {state.elements.map((element, i) => {
                        return (
                            <RenderComponent
                                key={i}
                                isSelected={element.id === elementId}
                                onSelect={() => {
                                    setElementId(element.id);
                                }}
                                element={element}
                                onChange={(newAttrs) => {
                                    const _elements = state.elements.slice();
                                    _elements[i] = {
                                        ..._elements[i],
                                        data: newAttrs,
                                    };
                                    handleUpdateState({elements: _elements});
                                }}
                            />
                        );
                    })}
                </Layer>
            </Stage>
        </div>
    );
}

export default KonvaEditor;
