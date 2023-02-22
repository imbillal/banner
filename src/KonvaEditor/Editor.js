import React, {useContext} from "react";
import {Stage, Layer} from "react-konva";
import RenderComponent from "./RenderComponent";
import {EditorContext} from "../context/elementContext";
import Loading from "../components/Loaing";

function KonvaEditor() {
    const {state, canvasRef, handleUpdateState, updateElement} =
        useContext(EditorContext);

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            handleUpdateState({currentBlock: null});
        }
    };

    const handleSetBlock = (element, idx) => {
        const currentBlock = state.elements.find(({id}) => id === element.id);

        if (currentBlock) {
            const _currentBlock = {
                idx,
                data: state.elements.find(({id}) => id === element.id),
            };

            handleUpdateState({
                currentBlock: _currentBlock,
                isSidebarActive: true,
            });
        }
    };

    if (state.loading) {
        return <Loading />;
    }
    return (
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
                            isSelected={
                                element.id === state.currentBlock?.data.id
                            }
                            onSelect={() => {
                                handleSetBlock(element, i);
                            }}
                            element={element}
                            onChange={(newAttrs) => {
                                const _elements = state.elements.slice();
                                _elements[i] = {
                                    ..._elements[i],
                                    data: newAttrs,
                                };
                                updateElement(_elements);
                            }}
                        />
                    );
                })}
            </Layer>
        </Stage>
    );
}

export default KonvaEditor;
