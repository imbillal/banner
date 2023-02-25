import React from "react";
import KonvaEditor from "./KonvaEditor";
import {BuilderWrap} from "./Builder.stc";
import ElementSettingModal from "../ElementSettingModal";
import ElementsLayout from "../Sidebar/ElementsLayout";
function Builder() {
    return (
        <>
            <BuilderWrap>
                <KonvaEditor />
                <ElementSettingModal />
            </BuilderWrap>
            <ElementsLayout />
        </>
    );
}

export default Builder;
