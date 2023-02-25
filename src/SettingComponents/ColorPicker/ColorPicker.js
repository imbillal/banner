import styled from "styled-components";
import React, {useState, useRef, useCallback, useEffect} from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Input from "../Input";
import PickrReact from "./PickrReact";
import InputGroup from "../InputGroup";
import isObject from "../../utils/isObject";
import ColorPickerModal from "./ColorPickerModal";
import {GlobalColors} from "./Color";
import {Button} from "antd";

import {EyeOutlined, DeleteOutlined, BorderOutlined} from "@ant-design/icons";

const ActionBtn = styled.div`
    height: ${({isSidebar}) => (isSidebar ? "26px" : "32px")};
    display: flex;
    font-size: ${({isSidebar}) => (isSidebar ? "14px" : "18px")};
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: ${({width}) => width || "40px"};
    border: 1px solid ${({theme}) => theme.inputBorder};
    color: ${({theme, isActive}) =>
        isActive ? theme.primary.fg : "currentColor"};

    &.color-dropper {
        svg {
            color: #fff;
            mix-blend-mode: difference;
        }
    }
`;

const ColorPicker = (props) => {
    const {
        path,
        value,
        onChange,
        clear = true,
        remove = false,
        preview = true,
        colorVars = true,
        previewWidth = "80px",
        ...rest
    } = props;

    const colorPreviewRef = useRef();
    // const { colors, setColors } = useGlobals();
    const [isModalVisible, showModal] = useState(false);
    const [isAddedToGlobal, setAddedToGlobal] = useState(false);
    const [isVisibleGlobal, setVisibleGlobal] = useState(false);
    const [selectedColor, setSelectedColor] = useState("");
    const [position, setPosition] = useState({top: "50%", left: "50%"});

    const handleChange = useCallback(
        (value) => {
            // let inputVal = payload.value;
            // const hexReg = /#?[0-9a-fA-F]{6}/;
            // if (hexReg.test(inputVal)) {
            //     inputVal = inputVal.startsWith("#") ? inputVal : `#${inputVal}`;
            // }
            onChange({path, value});
            // setAddedToGlobal(false);
        },
        [path, onChange]
    );

    const getItemNum = useCallback((item) => {
        if (typeof item?.key !== "string") return 0;
        const number = item.key.split("-").slice(-1).pop();
        return Number(number);
    }, []);

    const clearInput = () => {
        onChange({path, value: ""});
    };

    const handleColorModal = (event) => {
        const {clientX, clientY} = event;
        const {innerWidth, innerHeight} = window;

        let top = clientY,
            left = clientX;
        if (clientX + 300 > innerWidth) {
            left = clientX - 300;
        }
        if (clientY + 317 > innerHeight) {
            const fromTop = clientY + 317 - innerHeight;
            top = clientY + 317 / 2 - fromTop;
        }
        setPosition({top, left});
        showModal(!isModalVisible);
    };

    const handleColor = ({value}) => {
        onChange({path, value});
    };

    // useEffect(() => {
    //     // TODO: doesn't clear the selected global color always
    //     if (isActiveGlobalColor) {
    //         // const found = colors.find((col) => col.key === value.key);
    //         // if (!found) {
    //         //     handleChange({ value: '' });
    //         // } else {
    //         //     setSelectedColor(found.value);
    //         //     setVisibleGlobal(true);
    //         // }
    //         handleChange({value: ""});
    //     } else {
    //         setSelectedColor(value);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [value]);

    return (
        <>
            <InputGroup isSidebar={rest.sidebar}>
                <Input
                    isSidebar={rest.sidebar}
                    className="grow-1"
                    value={selectedColor}
                    onChange={handleChange}
                    placeholder="eg: #ff00ff"
                />
                {clear && (
                    <ActionBtn {...rest} onClick={clearInput}>
                        {/* <FontAwesomeIcon icon={["far", "eraser"]} /> */}
                        <BorderOutlined />
                    </ActionBtn>
                )}
                {remove && (
                    <ActionBtn {...rest} onClick={clearInput}>
                        {/* <FontAwesomeIcon icon={["far", "trash-alt"]} /> */}{" "}
                        <DeleteOutlined />
                    </ActionBtn>
                )}
                {/* {colorVars && (
                    <ActionBtn
                        {...rest}
                        isActive={isVisibleGlobal}
                        onClick={() => setVisibleGlobal((state) => !state)}
                    >
                        <FontAwesomeIcon icon={["far", "globe"]} />
                    </ActionBtn>
                )} */}
                {preview && (
                    <ActionBtn
                        {...rest}
                        width={previewWidth}
                        ref={colorPreviewRef}
                        onClick={handleColorModal}
                        style={{background: value}}
                        className={
                            !selectedColor
                                ? " transparent-bg-placeholder"
                                : "color-dropper"
                        }
                    >
                        {/* <FontAwesomeIcon icon={["far", "eye-dropper"]} /> */}
                        <EyeOutlined />
                    </ActionBtn>
                )}
            </InputGroup>

            {isModalVisible && (
                <ColorPickerModal
                    open={isModalVisible}
                    position={position}
                    color={value}
                    close={() => showModal(false)}
                    onChange={handleChange}
                >
                    {/* <PickrReact
                        className="mb-15"
                        value={selectedColor}
                        onChange={handleChange}
                    /> */}

                    <InputGroup {...rest} label="Color" className="mb-15">
                        <Input value={selectedColor} onChange={handleColor} />
                    </InputGroup>
                </ColorPickerModal>
            )}
        </>
    );
};
export default ColorPicker;
