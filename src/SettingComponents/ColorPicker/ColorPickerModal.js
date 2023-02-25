import React from "react";
import {Modal} from "antd";
import {SketchPicker} from "react-color";
import styled from "styled-components";

const converColor = (value) => {
    let obj = {};
    const format = ["r", "g", "b", "a"];

    if (typeof value === "string") {
        if (!value.includes("rgb" || value.include("#"))) {
            return value;
        }
        let arr = value
            .substring(5, value.length - 1)
            .replace(/ /g, "")
            .split(",");

        arr.map((item, i) => {
            obj[format[i]] = Number(item);
        });
        return obj;
    }
    let _rgbFormat = format.map((item) => value[item]).join(",");
    return `rgba(${_rgbFormat})`;
};

const ColorPickerModal = ({open, color, children, close, onChange}) => {
    const handleColor = (value) => {
        const color = value.rgb;
        onChange(converColor(color));
    };

    return (
        <CustomModal
            footer={null}
            open={open}
            title="Color Picker"
            width={300}
            onCancel={close}
        >
            <CustomColorPicker
                color={converColor(color) || "transparent"}
                onChange={handleColor}
                className="custom-color-picker"
                styles={{width: "100%"}}
            />
            {children}
        </CustomModal>
    );
};

const CustomModal = styled(Modal)`
    .ant-modal-body {
        position: relative;
        min-height: 400px;
    }
`;
const CustomColorPicker = styled(SketchPicker)`
    &.custom-color-picker {
        width: 100% !important;
        padding: 0 !important;
        margin-bottom: 20px;
        box-shadow: none !important;
        left: 0;
        top: 0;
    }
    .flexbox-fix {
        /* display: none !important; */
    }
`;

export default ColorPickerModal;
