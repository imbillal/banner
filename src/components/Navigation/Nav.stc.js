import styled from "styled-components";

import {Layout} from "antd";

export const NavWrap = styled(Layout.Header)`
    height: 46px;
    border-bottom: 2px solid #dedede;
    .nav-item {
        border-right: 1px solid #ddd;
    }
    .nav-item.logo {
        width: 100%;
        border-right: 2px solid #ddd;
        max-width: 110px;
    }
`;
