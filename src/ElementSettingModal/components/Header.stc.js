import styled from "styled-components";

export const HeaderWrap = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #dedede;
    .title {
        font-weight: bold;
        font-size: 18px;
    }
    .close-btn {
        cursor: pointer;
        padding: 4px;
        transition: all 0.3s;
        border-radius: 5px;
        &:hover {
            background: #dedede;
        }
    }
`;
