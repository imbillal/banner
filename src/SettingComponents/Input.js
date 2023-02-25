import React from "react";
import {Input} from "antd";
import {WrapperWithLabel} from "./sharedStyledComponent";

const InputStc = ({path, value, onChange, ...rest}) => {
    const handleChange = (value) => {
        onChange({path, value});
    };
    return (
        <WrapperWithLabel>
            <Input
                {...rest}
                onChange={({target}) => handleChange(target.value)}
            />
        </WrapperWithLabel>
    );
};

export default InputStc;
