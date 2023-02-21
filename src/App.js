import React, {useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import {Layout} from "antd";
import Navigation from "./components/Navigation";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContent";

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //     token: {colorBgContainer},
    // } = theme.useToken();

    return (
        <>
            <Navigation />

            <Layout style={{flexDirection: "row"}}>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
                <MainContainer
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
            </Layout>
        </>
    );
};

export default App;
