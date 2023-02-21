import React, {useContext} from "react";
import Navigation from "./components/Navigation";
import {EditorContext} from "./context/elementContext";

function Preview() {
    const {state} = useContext(EditorContext);
    return (
        <div>
            <Navigation />
            <img src={`${state.previewUrl || ""}`} alt="" />
        </div>
    );
}

export default Preview;
