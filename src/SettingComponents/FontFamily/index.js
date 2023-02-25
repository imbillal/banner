import {Select} from "antd";
import React, {useState} from "react";
import Label from "../Label";
import {WrapperWithLabel} from "../sharedStyledComponent";
import {googleFontOpts} from "../../utils/googleFontOpts";

function FontFamily({path, value, label, onChange}) {
    const [colors, setcolors] = useState({});
    const handleChange = (value) => {
        setcolors({path, value});
    };

    return (
        <WrapperWithLabel>
            {label && <Label>{label}</Label>}
            <Select
                value={value}
                onChange={handleChange}
                options={googleFontOpts}
                style={{width: "100%", maxWidth: "160px"}}
            />
        </WrapperWithLabel>
    );
}

export default FontFamily;
