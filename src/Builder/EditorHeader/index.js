import React, {useContext, useState} from "react";
import ComponentPosition from "../../SettingComponents/ComponentPosition";
import {HeaderWrap, Icon} from "./EditorHeader.stc";
import {
    TableOutlined,
    DeleteOutlined,
    UndoOutlined,
    RedoOutlined,
    CopyOutlined,
} from "@ant-design/icons";
import {EditorContext} from "../../context/elementContext";
import {Button} from "antd";
import {nanoid} from "nanoid";

function EditorHeader() {
    const {state, handleUpdateState} = useContext(EditorContext);
    const {currentBlock, isGridLayoutActive, elements} = state;

    const handleGridLayout = () => {
        handleUpdateState({isGridLayoutActive: !isGridLayoutActive});
    };
    const handleDelete = () => {
        if (!currentBlock) return;
        const _elements = elements.filter(
            (item) => item.id !== currentBlock.data.id
        );
        handleUpdateState({elements: _elements, currentBlock: null});
    };

    const handleDuplicate = () => {
        const newEl = {
            ...currentBlock.data,
            id: nanoid(12).toString(),
            slug: currentBlock.data.slug + nanoid(6).toString(),
        };

        const elements = [...state.elements, newEl];

        handleUpdateState({elements: elements});
    };

    return (
        <HeaderWrap>
            <li>
                <ComponentPosition />
            </li>
            <Icon isActive={isGridLayoutActive} onClick={handleGridLayout}>
                <Button className="action-btn">
                    <RedoOutlined style={{fontSize: "24px"}} />
                </Button>
            </Icon>
            <Icon
                className="grid-icon"
                isActive={isGridLayoutActive}
                onClick={handleGridLayout}
            >
                <Button className="action-btn">
                    <UndoOutlined style={{fontSize: "24px"}} />
                </Button>
            </Icon>
            <Icon
                className="grid-icon"
                isActive={isGridLayoutActive}
                onClick={handleGridLayout}
            >
                <TableOutlined style={{fontSize: "24px"}} />
            </Icon>
            <Icon className="duplicate-icon" onClick={handleDuplicate}>
                <Button
                    className="action-btn"
                    disabled={!currentBlock}
                    title="Duplicate"
                >
                    <CopyOutlined style={{fontSize: "20px", color: "#000"}} />
                </Button>
            </Icon>
            <Icon className="delete-icon" onClick={handleDelete}>
                <Button
                    className="action-btn"
                    disabled={!currentBlock}
                    title="Delete"
                >
                    <DeleteOutlined style={{fontSize: "20px", color: "red"}} />
                </Button>
            </Icon>
        </HeaderWrap>
    );
}

export default EditorHeader;
