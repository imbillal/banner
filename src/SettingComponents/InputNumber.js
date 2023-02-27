import {InputNumber} from "antd";
import React from "react";
import Label from "./Label";
import {WrapperWithLabel} from "./sharedStyledComponent";

function InputNumberComp({path, value, label, onChange, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value: parseFloat(value || 0)});
    };
    return (
        <WrapperWithLabel>
            {label && <Label>{label}</Label>}
            <InputNumber
                {...rest}
                style={{width: "100%", maxWidth: "80px"}}
                value={value}
                onChange={handleChange}
                // onBlur={({target}) => handleChange(target.value)}
            />
        </WrapperWithLabel>
    );
}

export default InputNumberComp;
