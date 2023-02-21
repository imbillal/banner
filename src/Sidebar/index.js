import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import {SidebarWrap, CustomMenu} from "./Sidebar.stc";
import ToggleButton from "../components/ToggleButton";

const {Sider} = Layout;

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <SidebarWrap>
            {/* <ToggleButton collapsed={collapsed} setCollapsed={setCollapsed} /> */}
            {/* <Sider trigger={null} collapsible collapsed={collapsed}> */}
            <CustomMenu
                mode="vertical"
                className="custom-menu"
                collapsed={collapsed}
            >
                <Menu.Item title="Text">
                    <VideoCameraOutlined className="icon" />
                    <span> Text</span>
                </Menu.Item>
                <Menu.Item title="Image">
                    <VideoCameraOutlined className="icon" />
                    <span> Image</span>
                </Menu.Item>
                <Menu.Item title="Shape">
                    <UploadOutlined className="icon" />
                    <span> Shape</span>
                </Menu.Item>
            </CustomMenu>
            {/* </Sider> */}
        </SidebarWrap>
    );
}

export default Sidebar;
