import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    max-width: 200px;
    .ant-input-number-group-wrapper:first-child {
        .ant-input-number {
            border-radius: 0;
        }
    }
    .ant-input-number-group-wrapper:last-child {
        .ant-input-number-group-addon {
            border-radius: 0;
            border-left: 0;
        }
    }
`;
