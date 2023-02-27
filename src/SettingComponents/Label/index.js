import React from "react";
import styled, {css} from "styled-components";

const Wrapper = styled.div``;

const LabelSC = styled.label`
    margin-bottom: 8px;
    margin-right: 10px;
    font-weight: 500;
    font-size: 14px;
`;

const Label = ({style, module, children, className}) => {
    return (
        <Wrapper group={module?.group} className={className} style={style}>
            <LabelSC>{children} </LabelSC>
        </Wrapper>
    );
};
export default React.memo(Label);
