import styled from "styled-components";

export const RadioWrap = styled.div`
    .font-style {
        border-right: 0;
        label:last-child {
            border-start-end-radius: 0;
            border-end-end-radius: 0;
        }
    }
    .font-decoration {
        border-left: 0;
        label:first-child {
            border-start-start-radius: 0;
            border-end-start-radius: 0;
            border-left: 0;
        }
    }
`;
