import styled from "styled-components";

export const Sidebar = styled.div`
    position: absolute;
    top: 0;
    left: ${({isSidebarVisible}) => (isSidebarVisible ? 0 : "-320px")};
    background: #fff;
    transition: all 0.3s;
    border-right: 2px solid #dedede;
    width: 100%;
    max-width: 320px;
    z-index: 99;
`;
export const SidebarWrap = styled.div`
    height: calc(100vh - 46px);
    overflow: hidden;
    overflow-y: auto;
`;

export const StyleWrapper = styled.div``;
