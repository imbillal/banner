import {Input} from "antd";
import React from "react";
import Label from "../Label";
import {WrapperWithLabel} from "../sharedStyledComponent";

function InputURL({path, value, onChange, label, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value});
    };

    return (
        <WrapperWithLabel>
            <Label>{label}</Label>
            <Input
                value={value}
                addonBefore="url"
                onChange={({target}) => handleChange(target.value)}
                defaultValue=""
                {...rest}
            />
        </WrapperWithLabel>
    );
}

export default InputURL;
