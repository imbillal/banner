import React from "react";
import {Radio} from "antd";
import Label from "../Label";
import RenderIcon from "../RenderIcon";
import {RadioWrap} from "./StyleAndDecuration.stc";
import {WrapperWithLabel} from "../sharedStyledComponent";

function StyleAndDecuration({path, options, label, data = {}, onChange}) {
    const {data: styles = {}} = data;
    const handleChange = (value, type) => {
        let _temPath = path.split("/");
        _temPath.pop();
        _temPath.push(type);

        onChange({value, path: _temPath.join("/")});
    };

    return (
        <WrapperWithLabel>
            {label && <Label>{label}</Label>}
            <RadioWrap>
                <Radio.Group
                    optionType="button"
                    buttonStyle="solid"
                    className="font-style"
                    value={styles.fontStyle || ""}
                    onChange={({target}) =>
                        handleChange(target.value, "fontStyle")
                    }
                >
                    {options
                        .filter((opts) => opts.type === "fontStyle")
                        .map((opts) => (
                            <Radio.Button value={opts.value}>
                                {opts.label} {` `}
                                <RenderIcon icon={opts.icon} />
                            </Radio.Button>
                        ))}
                </Radio.Group>
                <Radio.Group
                    optionType="button"
                    buttonStyle="solid"
                    className="font-decoration"
                    value={styles.textDecoration || ""}
                    onChange={({target}) =>
                        handleChange(target.value, "textDecoration")
                    }
                >
                    {options
                        .filter((opts) => opts.type === "textDecoration")
                        .map((opts) => (
                            <Radio.Button value={opts.value}>
                                {opts.label} {` `}{" "}
                                <RenderIcon icon={opts.icon} />
                            </Radio.Button>
                        ))}
                </Radio.Group>
            </RadioWrap>
        </WrapperWithLabel>
    );
}

export default StyleAndDecuration;
