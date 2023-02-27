import React, {useContext} from "react";
import {HeaderWrap} from "./Header.stc";
import {CloseOutlined} from "@ant-design/icons";
import {EditorContext} from "../../context/elementContext";
function Header() {
    const {
        state: {currentBlock},
        setCurrentBlock,
    } = useContext(EditorContext);

    const handleClose = () => {
        setCurrentBlock(null);
    };
    if (!currentBlock) return null;
    return (
        <HeaderWrap>
            <span className="title">{currentBlock.data.className}</span>
            <span className="close-btn" onClick={handleClose}>
                <CloseOutlined />
            </span>
        </HeaderWrap>
    );
}

export default Header;
