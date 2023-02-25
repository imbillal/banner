import React, {useState, useContext} from "react";
import {Tree, Button, Modal, Dropdown} from "antd";
import styled from "styled-components";
import {nanoid} from "nanoid";
import {EditorContext} from "../../context/elementContext";
import {defaultElements} from "../../Elements/elementResorce";
import {CloseOutlined, EllipsisOutlined} from "@ant-design/icons";
const modalData = {
    title: "Add New Element",
    okText: "Add Element",
};
const {TreeNode} = Tree;

function Layout() {
    const {state, updateElement} = useContext(EditorContext);
    const [modal, setModal] = useState(modalData);
    const getPosition = (path = "") => {
        return Number(path.split("-")[1]);
    };
    const handleOnDrop = (props) => {
        const sourceIdx = getPosition(props.dragNode.pos);
        const destinationIdx = getPosition(props.node.pos);

        const isMovingTop = sourceIdx > destinationIdx;
        let dragIdx = sourceIdx,
            dropTo = destinationIdx;

        const diff = destinationIdx - sourceIdx;
        if (isMovingTop && props.node.dragOverGapBottom) {
            if (diff + 1 === 0) return;

            dropTo = destinationIdx + 1;
        }

        const elements = [...state.elements];
        const item = elements.splice(dragIdx, 1)[0];
        elements.splice(dropTo, 0, item);
        updateElement(elements);
    };

    const handleDelete = (id) => {
        updateElement(state.elements.filter((el) => el.id !== id));
    };

    const renderTitle = (item) => {
        const items = [
            {
                key: "delete",
                label: (
                    <span onClick={() => handleDelete(item.id)}>Delete</span>
                ),
            },
        ];
        return (
            <div className="title-wrapper">
                <span className="title" title={item.label}>
                    {item.label}
                </span>

                <Dropdown
                    menu={{items}}
                    trigger="click"
                    className="action-btn"
                    placement="bottomLeft"
                >
                    <EllipsisOutlined />
                </Dropdown>
            </div>
        );
    };
    const renderTreeNodes = (data) =>
        data.map((item, idx) => {
            if (Array.isArray(item.content)) {
                return (
                    <TreeNode
                        title={() => renderTitle(item)}
                        key={idx}
                        dataRef={item}
                        parent={data}
                    >
                        {renderTreeNodes(item)}
                    </TreeNode>
                );
            }

            return (
                <TreeNode
                    title={() => renderTitle(item)}
                    dataRef={item}
                    key={idx}
                    parent={data}
                >
                    {item.name}
                </TreeNode>
            );
        });

    const handleAddBlock = (key) => {
        updateElement([
            ...state.elements,
            {...defaultElements[key], id: nanoid(12).toString()},
        ]);
        handleModal();
    };

    const handleModal = (value) => {
        setModal((prev) => ({
            ...prev,
            open: value,
        }));
    };
    return (
        <div>
            {/* <AntdTree
                className="antd-custom-tree"
                onDrop={handleOnDrop}
                draggable={true}
            >
                {renderTreeNodes(state.elements)}
            </AntdTree> */}
            <Button
                onClick={() => handleModal(true)}
                type="primary"
                ghost
                block
            >
                Add New
            </Button>
            <AntdModal
                style={{maxWidth: 300}}
                {...modal}
                onCancel={() => handleModal()}
            >
                {Object.entries(defaultElements).map(([key, value]) => {
                    return (
                        <p
                            key={key}
                            className="default-element"
                            onClick={() => handleAddBlock(key)}
                        >
                            <span>{value.title || value.label}</span>
                        </p>
                    );
                })}
            </AntdModal>
        </div>
    );
}

const AntdModal = styled(Modal)`
    .default-element {
        margin: 0;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .default-element:hover {
        background: #eee;
    }
`;

const AntdTree = styled(Tree)`
    margin-bottom: 30px;
    &.antd-custom-tree .ant-tree-switcher-noop {
        display: none;
    }
    &.antd-custom-tree .ant-tree-node-content-wrapper .ant-tree-title {
        flex-basis: 100%;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-left: 4px;
        & .title-wrapper {
            display: flex;
            justify-content: space-between;
            .title {
                width: 120px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .action-btn {
                visibility: hidden;
                display: flex;
                align-items: center;
                border: none;
                padding: 0 10px;
                border-radius: 0 5px 5px 0;
                background: #b6b7b8;
                color: #ffffff;
                cursor: pointer;
            }
            &:hover .action-btn {
                visibility: visible;
            }
        }
    }
`;
export default Layout;
