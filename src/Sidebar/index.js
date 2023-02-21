import React, {useState, useContext} from "react";
import {Menu} from "antd";
import {
    UploadOutlined,
    UnorderedListOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import {
    SidebarWrap,
    SidebaMenuItems,
    SideBarComponent,
    CustomMenu,
} from "./Sidebar.stc";
import components from "./components";
import ToggleButton from "../components/ToggleButton";
import {EditorContext} from "../context/elementContext";

function Sidebar() {
    const {state, handleUpdateState} = useContext(EditorContext);
    const [componentType, setComponentType] = useState();
    const handleComponentType = (type) => {
        handleUpdateState({collapsed: false});
        setComponentType(type);
    };

    return (
        <SidebarWrap>
            <SidebaMenuItems>
                <CustomMenu
                    mode="vertical"
                    className="custom-menu"
                    collapsed={state.collapsed}
                >
                    <Menu.Item
                        title="Text"
                        onClick={() => handleComponentType("text")}
                    >
                        <VideoCameraOutlined className="icon" />
                        <span> Text</span>
                    </Menu.Item>
                    <Menu.Item
                        title="Image"
                        onClick={() => handleComponentType("image")}
                    >
                        <VideoCameraOutlined className="icon" />
                        <span> Image</span>
                    </Menu.Item>
                    <Menu.Item
                        title="Shape"
                        onClick={() => handleComponentType("shape")}
                    >
                        <UploadOutlined className="icon" />
                        <span> Shape</span>
                    </Menu.Item>
                    <Menu.Item
                        title="Layouts"
                        onClick={() => handleComponentType("layout")}
                    >
                        <UnorderedListOutlined className="icon" />
                        <span> Layouts</span>
                    </Menu.Item>
                </CustomMenu>
            </SidebaMenuItems>
            <RenderSidebarComponent
                type={componentType}
                collapsed={state.collapsed}
            >
                <ToggleButton />
            </RenderSidebarComponent>
        </SidebarWrap>
    );
}

const RenderSidebarComponent = ({children, type, collapsed, ...rest}) => {
    const Component = components[type];
    return (
        <SideBarComponent collapsed={!Component || collapsed}>
            {Component && children}
            {Component && <Component {...rest} />}
        </SideBarComponent>
    );
};

export default Sidebar;
