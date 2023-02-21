import React from "react";
import {NavWrap} from "./Nav.stc";
import {Breadcrumb, Layout, Menu, theme} from "antd";

const {Header, Content, Footer} = Layout;

function Navigation() {
    return (
        <NavWrap>
            <Menu mode="horizontal">
                <Menu.Item className="nav-item logo">Dorik Logo</Menu.Item>
                <Menu.Item className="nav-item">Home</Menu.Item>
                <Menu.Item className="nav-item">About</Menu.Item>
            </Menu>
        </NavWrap>
    );
}

export default Navigation;
