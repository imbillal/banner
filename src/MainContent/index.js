import React from "react";
import {Layout} from "antd";
import Builder from "../Builder";
import {MainSectionWrap} from "./Main.stc";
import ToggleButton from "../components/ToggleButton";

function Main({collapsed, setCollapsed}) {
    return (
        <MainSectionWrap>
            <Layout.Content>
                <Builder />
            </Layout.Content>
        </MainSectionWrap>
    );
}

export default Main;
