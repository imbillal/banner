import {Menu} from "antd";
import styled from "styled-components";

export const SidebarWrap = styled.div`
    width: 100%;
    max-width: 110px;
    height: calc(100vh - 46px);
    position: relative;
    z-index: 999;
    border-right: 2px solid #dedede;
    position: relative;
`;
export const SidebaMenuItems = styled.div`
    height: 100%;
    width: 100%;
    max-width: 110px;
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 1;
`;
export const CustomMenu = styled(Menu)`
    padding-top: 20px;
    .ant-menu-item {
        height: 80px;
        width: 80px;
        margin-left: auto;
        margin-right: auto;
        background: #2161b3;
        line-height: 1.5;
    }
    .ant-menu-item .icon {
        font-size: 30px;
    }

    .ant-menu-item:hover {
        background: #2161b3 !important;
    }
    .ant-menu-item .anticon + span {
        margin-inline-start: 0;
    }

    .ant-menu-title-content {
        color: #fff;
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
