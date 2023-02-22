import React, {useContext} from "react";
import ToggleButton from "../components/ToggleButton";
import {EditorContext} from "../context/elementContext";
import Header from "./components/Header";
import {SidebarWrap} from "./components/SidebarWrap.stc";

function SidebarSetting() {
    const {state} = useContext(EditorContext);
    const isSidebarVisible = state.isSidebarActive && state.currentBlock;
    return (
        <SidebarWrap isSidebarVisible={isSidebarVisible}>
            <Header title="Text" />
            <ToggleButton />
        </SidebarWrap>
    );
}

export default SidebarSetting;
