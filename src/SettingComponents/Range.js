import React from "react";
import {Slider, InputNumber} from "antd";
import styled from "styled-components";
import {WrapperWithLabel} from "./sharedStyledComponent";

function Range({path, value: inputValue, onChange, step = 1, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value: parseFloat(value || 0)});
    };

    return (
        <WrapperWithLabel>
            <CustomSlider
                {...rest}
                step={step}
                onChange={handleChange}
                value={typeof inputValue === "number" ? inputValue : 0}
            />
            <InputNumber
                {...rest}
                step={step}
                style={{width: "100%", maxWidth: "80px"}}
                value={inputValue}
                onChange={handleChange}
                onBlur={({target}) => handleChange(target.value)}
            />
        </WrapperWithLabel>
    );
}

const CustomSlider = styled(Slider)`
    width: 100%;
`;

export default Range;
