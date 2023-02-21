import React, {useRef, useState} from "react";
import {Layout} from "antd";
import Navigation from "./components/Navigation";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContent";
import {EditorContextProvider} from "./context/elementContext";
import {defaultElements} from "./Elements/elementResorce";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Preview from "./Preview";

const App = () => {
    return (
        <>
            <Navigation />
            <Layout style={{flexDirection: "row"}}>
                <Sidebar />
                <MainContainer />
            </Layout>
            <Preview />
        </>
    );
};

const AppComp = () => {
    const [state, setstate] = useState({
        collapsed: true,
        canvasStyle: {
            width: 800,
            height: 400,
        },
        elements: [defaultElements.circle],
    });
    const canvasRef = useRef();

    const handleUpdateState = (value) => {
        setstate((prev) => ({...prev, ...value}));
    };
    return (
        <EditorContextProvider value={{handleUpdateState, state, canvasRef}}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/preview" component={Preview} />
                </Switch>
            </Router>
        </EditorContextProvider>
    );
};

export default AppComp;
