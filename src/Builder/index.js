import React from "react";
import KonvaEditor from "./KonvaEditor";
import {BuilderWrap} from "./Builder.stc";
import ElementSettingModal from "../ElementSettingModal";
import EditorHeader from "./EditorHeader";
function Builder() {
    return (
        <>
            <EditorHeader />
            <BuilderWrap className="fasf">
                <KonvaEditor />
                <ElementSettingModal />
            </BuilderWrap>
        </>
    );
}

export default Builder;
