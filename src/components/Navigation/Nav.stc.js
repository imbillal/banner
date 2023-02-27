import styled from "styled-components";

import {Layout} from "antd";

export const NavWrap = styled(Layout.Header)`
    height: 46px;
    position: relative;
    z-index: 99;
    border-bottom: 2px solid #dedede;
    .nav-item {
        border-right: 1px solid #ddd;
        padding: 0 10px;
    }
    .nav-item.logo {
        text-align: center;
        width: 100%;
        border-right: 2px solid #ddd;
        max-width: 88px;
    }
`;
