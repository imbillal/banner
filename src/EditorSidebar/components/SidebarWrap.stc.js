import styled from "styled-components";

export const SidebarWrap = styled.div`
    position: absolute;
    top: 0;
    right: ${({isSidebarVisible}) => (isSidebarVisible ? 0 : "-200px")};
    background: #fff;
    transition: all 0.3s;
    border-left: 2px solid #dedede;
    width: 100%;
    max-width: 200px;
    height: calc(100vh - 46px);
`;

export const StyleWrapper = styled.div``;
