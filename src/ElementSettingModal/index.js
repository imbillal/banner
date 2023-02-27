import React, {useContext} from "react";
import ToggleButton from "../components/ToggleButton";
import {EditorContext} from "../context/elementContext";
import Header from "./components/Header";
import {SidebarWrap, Sidebar, StyleWrapper} from "./components/SidebarWrap.stc";
import settings from "../Elements/componentModules/index";
import {Collapse} from "antd";
import RenderTemplate from "../SettingComponents/core/RenderTemplate";
import styled from "styled-components";

const {Panel} = Collapse;
function SidebarSetting() {
    const {state, onSaveSettings} = useContext(EditorContext);
    const {currentBlock, isSidebarActive} = state;
    const isSidebarVisible = isSidebarActive && currentBlock;

    return (
        <Sidebar isSidebarVisible={isSidebarVisible}>
            <SidebarWrap>
                <Header />
                <StyleWrapper className="custom-wrap">
                    <Collapse defaultActiveKey={0} ghost>
                        {settings[currentBlock?.data?.type]
                            ?.filter((v) => v)
                            .map((group, idx) => (
                                <Panel
                                    header={
                                        <PanelHeader>{group.label}</PanelHeader>
                                    }
                                    key={idx}
                                >
                                    <RenderTemplate
                                        module={group}
                                        data={state.currentBlock?.data || {}}
                                        handleChange={onSaveSettings}
                                    />
                                </Panel>
                            ))}
                    </Collapse>
                </StyleWrapper>
            </SidebarWrap>
            <ToggleButton type="setting" />
        </Sidebar>
    );
}

export default SidebarSetting;

const PanelHeader = styled.span`
    font-weight: bold;
`;
