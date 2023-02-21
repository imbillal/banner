import React from "react";
import {
    MenuFoldOutlined,
    RightOutlined,
    LeftOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {ToggleWrapper} from "./ToggleButton.stc";

function ToggleButton({collapsed, setCollapsed}) {
    const Icon = (props) =>
        collapsed ? <RightOutlined {...props} /> : <LeftOutlined {...props} />;
    return (
        <ToggleWrapper>
            <Icon
                onClick={() => setCollapsed(!collapsed)}
                className="trigger icon"
            />
        </ToggleWrapper>
    );
}

export default ToggleButton;
