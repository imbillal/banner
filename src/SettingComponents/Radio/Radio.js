import React from "react";
import {Radio} from "antd";
import RenderIcon from "../RenderIcon";
import {Wrapper} from "./Radio.stc";
import Label from "../Label";

function RadioComp({value, path, options, label, onChange, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value});
    };

    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <Radio.Group
                optionType="button"
                buttonStyle="solid"
                value={value}
                onChange={({target}) => handleChange(target.value)}
            >
                {options.map((opts) => (
                    <Radio.Button value={opts.value}>
                        {opts.label} {` `} <RenderIcon icon={opts.icon} />
                    </Radio.Button>
                ))}
            </Radio.Group>
        </Wrapper>
    );
}

export default RadioComp;
