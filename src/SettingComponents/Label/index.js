import React from "react";
import styled, {css} from "styled-components";

function getGroupTitle({theme, group}) {
    if (group) {
        return css`
            margin-bottom: 8px;
            text-transform: uppercase;
            color: ${theme.primary.fg};
            border-top: 1px solid ${theme.borderPaleGrey};
            border-bottom: 1px solid ${theme.borderPaleGrey};

            &:first-of-type {
                border-top: 0;
            }
        `;
    }
}

const Wrapper = styled.div``;

const LabelSC = styled.label`
    color: currentColor;
    margin-bottom: 8px;
    margin-right: 10px;
    font-weight: 500;
    font-size: ${({isSidebar}) => (isSidebar ? "12px" : "14px")};
`;

const Label = ({style, module, children, className}) => {
    return (
        <Wrapper group={module?.group} className={className} style={style}>
            <LabelSC>{children} </LabelSC>
        </Wrapper>
    );
};
export default React.memo(Label);
