import styled from "styled-components";
import React, {useState, useRef, useCallback, useEffect} from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ColorPickerModal from "./ColorPickerModal";
import {Input} from "antd";

import {BgColorsOutlined} from "@ant-design/icons";
import Label from "../Label";
import {WrapperWithLabel} from "../sharedStyledComponent";

const ColorPicker = (props) => {
    const {path, value, onChange, label} = props;
    const [isModalVisible, showModal] = useState(false);

    const handleChange = useCallback(
        (value) => {
            onChange({path, value});
        },
        [path, onChange]
    );

    const handleColor = (value) => {
        onChange({path, value});
    };

    return (
        <WrapperWithLabel>
            {<Label>{label}</Label>}
            <AntInput
                onChange={({target}) => handleColor(target.value)}
                background={value}
                value={value}
                className={
                    !value ? " transparent-bg-placeholder" : "color-dropper"
                }
                addonAfter={
                    <span
                        className="icon"
                        onClick={() => showModal(!isModalVisible)}
                    >
                        <BgColorsOutlined />
                    </span>
                }
            />

            {isModalVisible && (
                <ColorPickerModal
                    open={isModalVisible}
                    color={value}
                    close={() => showModal(false)}
                    onChange={handleChange}
                ></ColorPickerModal>
            )}
        </WrapperWithLabel>
    );
};
export default ColorPicker;

const AntInput = styled(Input)`
    width: 100%;
    max-width: 180px;

    .ant-input-group-addon {
        padding: 0;
        background: ${({background}) => background};
        cursor: pointer;
        border-color: ${({background}) => background || "#d9d9d9"};
    }
    .icon {
        padding: 0 11px;
        height: 30px;
        position: relative;
        display: inline-block;
        display: flex;
        align-items: center;
    }
    &.color-dropper {
        svg {
            color: #fff;
            mix-blend-mode: difference;
        }
    }
    &.transparent-bg-placeholder {
        color: #000;
    }
`;
