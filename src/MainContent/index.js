import React from "react";
import {Layout} from "antd";
import Builder from "../Builder";
import {MainSectionWrap} from "./Main.stc";

function Main() {
    return (
        <MainSectionWrap>
            <Layout.Content>
                <Builder />
            </Layout.Content>
        </MainSectionWrap>
    );
}

export default Main;
