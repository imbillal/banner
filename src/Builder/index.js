import React from "react";
import KonvaEditor from "./KonvaEditor";
import {BuilderWrap} from "./Builder.stc";
import ElementSettingModal from "../ElementSettingModal";
function Builder() {
    return (
        <BuilderWrap>
            <KonvaEditor />
            <ElementSettingModal />
        </BuilderWrap>
    );
}

export default Builder;
