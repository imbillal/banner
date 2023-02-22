import React, {useRef, useEffect, useState} from "react";
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
        </>
    );
};

const AppComp = () => {
    const [state, setstate] = useState({
        loading: true,
        collapsed: true,
        currentBlock: null,
        isSidebarActive: false,
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

    const updateElement = (elements) => {
        setstate((prev) => ({...prev, elements}));
        localStorage.setItem("_elements", JSON.stringify(elements));
    };
    const updateCurrentBlock = (currentBlock) => {
        setstate((prev) => ({...prev, currentBlock}));
    };
    const setCurrentBlock = (value) => {
        setstate((prev) => ({...prev, currentBlock: value}));
    };

    useEffect(() => {
        const elements = JSON.parse(localStorage.getItem("_elements")) || [];
        const previewUrl = JSON.parse(
            localStorage.getItem("_previewUrl" || null)
        );
        setstate((prev) => ({...prev, previewUrl, elements, loading: false}));
    }, []);

    useEffect(() => {
        state.previewUrl &&
            localStorage.setItem(
                "_previewUrl",
                JSON.stringify(state.previewUrl)
            );
    }, [state.previewUrl]);

    return (
        <EditorContextProvider
            value={{
                handleUpdateState,
                updateCurrentBlock,
                updateElement,
                setCurrentBlock,
                state,
                canvasRef,
            }}
        >
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
