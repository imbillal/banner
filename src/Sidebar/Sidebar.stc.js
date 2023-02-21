import {Menu} from "antd";
import styled from "styled-components";

export const SidebarWrap = styled.div`
    height: calc(100vh - 46px);
    width: 100%;
    max-width: 110px;
    position: relative;
    border-right: 2px solid #dedede;
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
