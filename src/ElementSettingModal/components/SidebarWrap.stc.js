import styled from "styled-components";

export const SidebarWrap = styled.div`
    position: absolute;
    top: 0;
    right: ${({isSidebarVisible}) => (isSidebarVisible ? 0 : "-320px")};
    background: #fff;
    transition: all 0.3s;
    border-left: 2px solid #dedede;
    width: 100%;
    max-width: 320px;
    height: calc(100vh - 46px);
    overflow: hidden;
    overflow-y: auto;
`;

export const StyleWrapper = styled.div``;
