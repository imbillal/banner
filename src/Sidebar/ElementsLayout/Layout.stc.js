import styled from "styled-components";

export const LayoutWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    transition: all 0.3s;
    border-left: 2px solid #dedede;
    width: 100%;
    max-width: 280px;
    padding: 10px;
    height: calc(100vh - 46px);
    overflow: hidden;
    overflow-y: auto;
`;

export const Header = styled.div`
    border-bottom: 1px solid #dedede;
    padding: 15px 5px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
