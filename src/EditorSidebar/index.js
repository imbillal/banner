import React, {useContext} from "react";
import ToggleButton from "../components/ToggleButton";
import {EditorContext} from "../context/elementContext";
import Header from "./components/Header";
import {SidebarWrap, StyleWrapper} from "./components/SidebarWrap.stc";
import settings from "./componentSettings/index";
import {Collapse} from "antd";

const {Panel} = Collapse;
function SidebarSetting() {
    const {state} = useContext(EditorContext);
    const isSidebarVisible = state.isSidebarActive && state.currentBlock;
    console.log("billal", {settings: settings["text"]});

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
        <SidebarWrap isSidebarVisible={isSidebarVisible}>
            <Header />
            <StyleWrapper>
                <Collapse defaultActiveKey={0} ghost>
                    {settings["text"]
                        ?.filter((v) => v)
                        .map((group, idx) => (
                            <Panel header={group.label} key={idx}>
                                <RenderModules modules={group.modules} />
                            </Panel>
                        ))}
                </Collapse>
            </StyleWrapper>
            <ToggleButton />
        </SidebarWrap>
    );
}

const RenderModules = ({modules}) => {
    return modules.map((module) => {
        if (typeof module === "string") {
            return "string" + " " + module;
        }
        if (typeof module === "object") {
            return "hello";
        }
        return "fasdfa";
    });
};

export default SidebarSetting;
