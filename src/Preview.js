import React, {useContext} from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import {EditorContext} from "./context/elementContext";

function Preview() {
    const {state} = useContext(EditorContext);
    return (
        <div>
            <Navigation />
            <ImageWrap>
                <img src={`${state.previewUrl || ""}`} alt="" />
            </ImageWrap>
        </div>
    );
}
const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Preview;
