import {Switch} from "antd";
import React from "react";
import Label from "../Label";
import {WrapperWithLabel} from "../sharedStyledComponent";

function SwitchComp({path, value, label, onChange, ...rest}) {
    const handleChange = (value) => {};
    return (
        <WrapperWithLabel>
            {label && <Label>{label}</Label>}

            <Switch {...rest} onChange={handleChange} />
        </WrapperWithLabel>
    );
}

export default SwitchComp;
