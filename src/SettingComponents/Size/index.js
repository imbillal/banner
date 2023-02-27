import React from "react";
import {Slider, InputNumber} from "antd";
import styled from "styled-components";
import {WrapperWithLabel} from "../sharedStyledComponent";

function Size({path, value, onChange, step = 1, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value: parseFloat(value)});
    };

    return (
        <WrapperWithLabel>
            <CustomSlider
                {...rest}
                step={step}
                onChange={handleChange}
                value={typeof value === "number" ? value : 0}
            />
            <InputNumber
                {...rest}
                step={step}
                style={{width: "100%", maxWidth: "80px"}}
                value={value}
                onChange={handleChange}
                onBlur={({target}) => handleChange(target.value)}
            />
        </WrapperWithLabel>
    );
}

const CustomSlider = styled(Slider)`
    width: 100%;
`;

export default Size;
