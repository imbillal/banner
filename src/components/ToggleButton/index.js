import React, {useContext} from "react";
import {RightOutlined, LeftOutlined} from "@ant-design/icons";
import {ToggleWrapper} from "./ToggleButton.stc";
import {EditorContext} from "../../context/elementContext";

function ToggleButton() {
    const {state, handleUpdateState} = useContext(EditorContext);
    const Icon = (props) =>
        state.collapsed ? (
            <RightOutlined {...props} />
        ) : (
            <LeftOutlined {...props} />
        );
    return (
        <ToggleWrapper>
            <Icon
                onClick={() => handleUpdateState({collapsed: !state.collapsed})}
                className="trigger icon"
            />
        </ToggleWrapper>
    );
}

export default ToggleButton;
