import React from "react";
import {Input} from "antd";
import {WrapperWithLabel} from "./sharedStyledComponent";
const {TextArea} = Input;

function Textarea({path, onChange, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value});
    };

    return (
        <WrapperWithLabel>
            <TextArea
                rows={2}
                {...rest}
                onChange={({target}) => handleChange(target.value)}
            />
        </WrapperWithLabel>
    );
}

export default Textarea;
