import React, {useContext} from "react";
import {RightOutlined, LeftOutlined} from "@ant-design/icons";
import {ToggleWrapper} from "./ToggleButton.stc";
import {EditorContext} from "../../context/elementContext";

function ToggleButton({type}) {
    const {state, handleUpdateState} = useContext(EditorContext);
    const Icon = (props) =>
        state.isSidebarActive && state.currentBlock ? (
            <LeftOutlined {...props} />
        ) : (
            <RightOutlined {...props} />
        );

    const handleClick = () => {
        handleUpdateState({
            isSidebarActive: !state.isSidebarActive,
        });
    };
    return (
        <ToggleWrapper type={type}>
            <Icon onClick={handleClick} className="trigger icon" />
        </ToggleWrapper>
    );
}

export default ToggleButton;
