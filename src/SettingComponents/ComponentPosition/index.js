import {InputNumber} from "antd";
import React, {useContext} from "react";
import {EditorContext} from "../../context/elementContext";
import {Wrapper} from "./ComponentPosition.stc";

function ComponentPosition() {
    const {state, onSaveSettings, updateCanvasStyle} =
        useContext(EditorContext);
    const {currentBlock, canvasStyle} = state;
    const {data: style = {}} = currentBlock?.data || {};

    const handleXChange = (value) => {
        if (currentBlock) {
            onSaveSettings({path: "data/x", value: parseFloat(value || 0)});
        } else {
            updateCanvasStyle({width: parseFloat(value || 0)});
        }
    };
    const handleYChange = (value) => {
        if (currentBlock) {
            onSaveSettings({path: "data/y", value: parseFloat(value || 0)});
        } else {
            updateCanvasStyle({height: parseFloat(value || 0)});
        }
    };
    const xValue = currentBlock ? style.x : canvasStyle.width;
    const yValue = currentBlock ? style.y : canvasStyle.height;

    return (
        <Wrapper>
            <InputNumber
                value={xValue}
                onChange={handleXChange}
                addonBefore={<>X</>}
                style={{width: "100%"}}
            />
            <InputNumber
                value={yValue}
                onChange={handleYChange}
                addonBefore={<>Y</>}
                style={{width: "100%"}}
            />
        </Wrapper>
    );
}

export default ComponentPosition;
