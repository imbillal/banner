import styled from "styled-components";

export const RadioWrap = styled.div`
    /* &:first-child {
        background-color: red;
        margin-top: 20px;
    }
    &:nth-child(1) {
        background: red;
    } */

    .font-style {
        /* background: green; */
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
