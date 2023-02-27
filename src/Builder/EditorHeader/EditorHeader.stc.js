import styled from "styled-components";

export const HeaderWrap = styled.ul`
    height: 40px;
    margin: 0;
    margin-bottom: 20;
    padding: 0 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
    background: #fff;
    border-bottom: 1px solid #dedede;
    list-style: none;
    position: relative;
    z-index: 1;

    li {
        padding-right: 10px;
        border-right: 1px solid #dedede;
        &:last-child {
            border-right: 0;
        }
    }
`;

export const Icon = styled.li`
    cursor: pointer;
    padding: 4px;
    background: #fff;
    .action-btn {
        padding: 0;
        background: transparent;
        border: none;
    }
    &.grid-icon {
        color: ${({isActive}) => (isActive ? "blue" : "#000")};
    }
    &.delete-icon {
        color: ${({isActive}) => (isActive ? "blue" : "#000")};
    }
`;
