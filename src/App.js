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
import {EditorContextProvider} from "./context/elementContext";

const App = () => {
    const [state, setstate] = useState({
        collapsed: true,
    });

    const handleUpdateState = (value) => {
        console.log("bilall", {value});
        setstate((prev) => ({...prev, ...value}));
    };

    return (
        <EditorContextProvider value={{handleUpdateState, state}}>
            <Navigation />
            <Layout style={{flexDirection: "row"}}>
                <Sidebar />
                <MainContainer />
            </Layout>
        </EditorContextProvider>
    );
};

export default App;
