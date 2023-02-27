import React, {useState, useContext, useEffect, useRef} from "react";
import {Tree, Button, Modal, Dropdown, Input, message} from "antd";
import styled from "styled-components";
import {nanoid} from "nanoid";
import {EditorContext} from "../../context/elementContext";
import {defaultElements} from "../../Elements/elementResorce";
import {LayoutWrapper, Header} from "./Layout.stc";
import useOuterClick from "../../hooks/useOuterClick";
import slugify from "slugify";
const modalData = {
    title: "Add New Element",
    okText: "Add Element",
};
const {TreeNode} = Tree;

function Layout() {
    const {state, handleUpdateState, updateElement} = useContext(EditorContext);
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

    const renderTreeNodes = (data) =>
        data.map((item, idx) => {
            if (Array.isArray(item.content)) {
                return (
                    <TreeNode
                        title={<RenderTitle item={item} />}
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
                    title={<RenderTitle item={item} />}
                    dataRef={item}
                    key={idx}
                    parent={data}
                >
                    {item.name}
                </TreeNode>
            );
        });

    const handleAddBlock = (key) => {
        const {addedBlockLength} = state;
        const currentLength = addedBlockLength + 1;
        let _element = defaultElements[key];
        _element.slug = `${_element.type}_${currentLength}`;
        _element.id = nanoid(12).toString();
        const elements = [...state.elements];
        elements[addedBlockLength] = {..._element};

        const currentBlock = {
            idx: addedBlockLength,
            data: _element,
        };
        handleUpdateState({
            elements,
            currentBlock,
            addedBlockLength: currentLength,
        });
        handleModal();
    };

    const handleModal = (value) => {
        setModal((prev) => ({
            ...prev,
            open: value,
        }));
    };
    return (
        <LayoutWrapper>
            <Header>Layers</Header>
            <AntdTree
                className="antd-custom-tree"
                onDrop={handleOnDrop}
                draggable={true}
            >
                {renderTreeNodes(state.elements || [])}
            </AntdTree>
            <Button onClick={() => handleModal(true)} type="dashed" block>
                + Add New Block
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
        </LayoutWrapper>
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
    .ant-tree-treenode,
    .ant-tree-node-content-wrapper,
    .ant-tree-node-content-wrapper.ant-tree-node-selected {
        width: 100%;
    }
    &.antd-custom-tree .ant-tree-switcher-noop {
        display: none;
    }
    /* &.antd-custom-tree .ant-tree-node-content-wrapper .ant-tree-title {
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
    } */
`;
export default Layout;

const RenderTitle = ({item}) => {
    const {state, handleUpdateState, updateElement} = useContext(EditorContext);
    const [slug, setSlug] = useState(item.slug || "");
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef();
    const refe = useOuterClick(() => {
        setIsEditing(false);
    });

    const handleBlur = (value) => {
        value = slugify(value.trim());
        if (value === item.slug) return;
        const isSlugMatched = state.elements.find(
            (item) => item.slug === value
        );

        if (!isSlugMatched) {
            setSlug(value);
            let index = state.elements.findIndex((el) => el.id === item.id);
            const elements = [...state.elements];
            elements[index] = {...item, slug: value};
            updateElement(elements);
            setIsEditing(false);
            message.success("Slug is updated");
        } else {
            setIsEditing(false);
            message.error("Slug is not unique");
        }
    };

    const handleSetBlock = (element) => {
        let idx = state.elements.findIndex((el) => el.id === element.id);
        if (idx >= 0) {
            const currentBlock = {
                idx,
                data: element,
            };
            handleUpdateState({
                currentBlock: currentBlock,
                isSidebarActive: true,
            });
        }
    };
    // useEffect(() => {
    //     inputRef.current?.focus();
    // }, [inputRef, isEditing]);

    return (
        <div
            ref={refe}
            className="title-wrapper"
            onDoubleClick={() => {
                setIsEditing(true);
            }}
        >
            {!isEditing ? (
                <span
                    // onClick={() => handleSetBlock(item)}
                    className="title"
                    title={item.slug}
                >
                    {item.slug}
                </span>
            ) : (
                <Input
                    value={slug}
                    onChange={({target}) => setSlug(target.value)}
                    onBlur={({target}) => handleBlur(target.value)}
                    placeholder="Type Unique id"
                />
            )}

            {/* <Dropdown
                menu={{items}}
                trigger="click"
                className="action-btn"
                placement="bottomLeft"
            >
                <EllipsisOutlined />
            </Dropdown> */}
        </div>
    );
};