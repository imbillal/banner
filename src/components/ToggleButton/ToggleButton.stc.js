import styled from "styled-components";

export const ToggleWrapper = styled.div`
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    .icon {
        align-items: center;
        justify-content: center;
        background: green;
        display: flex;
        width: 20px;
        height: 60px;
        cursor: pointer;
        transition: all 0.3s;
        background: #f4f6f9;
        color: #000;
        border: 2px solid #dedede;
        border-right: none;
    }
    .icon:hover {
        color: #fff;
        background: #0062ff;
        border-color: #0062ff;
    }
`;
