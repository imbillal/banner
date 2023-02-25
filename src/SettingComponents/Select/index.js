import {Select} from "antd";
import React from "react";
import Label from "../Label";
import {WrapperWithLabel} from "../sharedStyledComponent";

function SelectComp({path, value, label, options, onChange}) {
    const handleChange = (value) => {
        onChange({path, value});
    };
    return (
        <WrapperWithLabel>
            {label && <Label>{label}</Label>}
            <Select
                value={value}
                onChange={handleChange}
                options={options}
                style={{width: "100%", maxWidth: "160px"}}
            />
        </WrapperWithLabel>
    );
}

export default SelectComp;
