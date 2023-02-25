import {Line} from "react-konva";
import React, {useContext} from "react";
import {Stage, Layer} from "react-konva";
import RenderComponent from "./RenderComponent";
import Loading from "../../components/Loaing";
import {EditorContext} from "../../context/elementContext";

function KonvaEditor() {
    const {state, canvasRef, handleUpdateState} = useContext(EditorContext);
    const {elements, canvasStyle} = state;
    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            handleUpdateState({currentBlock: null});
        }
    };

    if (state.loading) {
        return <Loading />;
    }

    return (
        <Stage
            className="custom-konva-stage"
            ref={canvasRef}
            {...canvasStyle}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
        >
            <RenderGrid />
            <Layer>
                <RenderElements elements={elements} />
            </Layer>
        </Stage>
    );
}

const RenderElements = ({elements = []}) => {
    const {state, updateCurrentBlock, handleUpdateState} =
        useContext(EditorContext);
    const {selectedIds = []} = state;

    const handleSetBlock = (element, idx) => {
        const selectedBlock = state.elements.find(({id}) => id === element.id);
        if (selectedBlock) {
            const currentBlock = {
                idx,
                data: state.elements.find(({id}) => id === element.id),
            };

            handleUpdateState({
                currentBlock: currentBlock,
                isSidebarActive: true,
            });
        }
    };

    return elements.map((element, idx) => {
        if (element.group) {
            const {elements} = element.group;
            return <RenderElements elements={elements} />;
        } else {
            return (
                <RenderComponent
                    key={idx}
                    isSelected={selectedIds.includes(element.id)}
                    onSelect={() => {
                        handleSetBlock(element, idx);
                    }}
                    element={element}
                    onChange={(newAttrs) => {
                        let _block = {
                            idx,
                            data: {
                                ...state.elements[idx],
                                data: newAttrs,
                            },
                        };
                        updateCurrentBlock(_block);
                    }}
                />
            );
        }
    });
};

const RenderGrid = () => {
    const grid = 40;
    const gridWidth = 800;
    const linesA = [];
    const linesB = [];

    for (let i = 0; i < gridWidth / grid; i++) {
        linesA.push(
            <Line
                strokeWidth={1}
                stroke={"rgba(0, 0, 0, .15)"}
                dash={[1, 2]}
                points={[i * grid, 0, i * grid, gridWidth]}
            />
        );

        linesB.push(
            <Line
                strokeWidth={1}
                stroke={"rgba(0, 0, 0, .15)"}
                dash={[1, 2]}
                points={[0, i * grid, gridWidth, i * grid]}
            />
        );
    }

    return (
        <>
            <Layer>
                {linesA}
                {linesB}
            </Layer>
        </>
    );
};

export default KonvaEditor;
