import {Menu} from "antd";
import styled from "styled-components";

export const SidebarWrap = styled.div`
    width: 70px;
    min-width: 70px;
    height: calc(100vh - 46px);
    position: relative;
    z-index: 999;
    border-right: 2px solid #dedede;
    position: relative;
`;
export const SidebaMenuItems = styled.div`
    height: 100%;
    width: 70px;
    min-width: 70px;
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 1;
`;
export const CustomMenu = styled(Menu)`
    padding-top: 20px;
    .ant-menu-item {
        height: 60px;
        width: 60px;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        margin-bottom: 5px;
        line-height: 1.5;
    }
    .ant-menu-item .icon {
        font-size: 24px;
    }

    .ant-menu-item:hover {
        background: #f9f0ff !important;
    }
    .ant-menu-item .anticon + span {
        margin-inline-start: 0;
    }

    .ant-menu-title-content {
        color: #000;
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }
`;

export const SideBarComponent = styled.div`
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    background: #fff;
    padding: 10px;
    border: 2px solid #ddd;
    border-left: 0;
    transition: all 0.4s linear;
    left: ${({collapsed}) => (collapsed ? "-110px" : "110px")};
`;
