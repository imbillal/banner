import React from "react";
import KonvaEditor from "../KonvaEditor";
import {BuilderWrap} from "./Builder.stc";
import EditorSetting from "../EditorSidebar";
function Builder() {
    return (
        <BuilderWrap>
            <KonvaEditor />
            <EditorSetting />
        </BuilderWrap>
    );
}

export default Builder;
