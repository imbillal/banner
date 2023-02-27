import React, {useRef, useEffect, useState} from "react";
import {Layout} from "antd";
import Navigation from "./components/Navigation";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContent";
import {EditorContextProvider} from "./context/elementContext";
import {defaultElements} from "./Elements/elementResorce";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Preview from "./Preview";
import ElementsLayout from "./Sidebar/ElementsLayout";
import merge from "lodash/merge";

const App = () => {
    return (
        <>
            <Navigation />
            <Layout style={{flexDirection: "row"}}>
                <Sidebar />
                <MainContainer />
                <ElementsLayout />
            </Layout>
        </>
    );
};

const AppComp = () => {
    const [state, setstate] = useState({
        loading: true,
        collapsed: true,
        currentBlock: null,
        addedBlockLength: 0,
        isSidebarActive: false,
        canvasStyle: {
            width: 800,
            height: 400,
        },
        elements: [],
    });
    const canvasRef = useRef();

    const handleUpdateState = (value) => {
        setstate((prev) => ({...prev, ...value}));
        updateInlocalStorage();
    };

    const onSaveSettings = (value) => {
        const payload = Array.isArray(value) ? value : [value];

        let updatedValue = payload.map((item) => {
            return saveOne(state.currentBlock.data || {}, item);
        });

        const _currentBlock = {
            ...state.currentBlock,
            data: merge(...updatedValue),
        };

        let _elements = [...state.elements];
        _elements[state.currentBlock.idx] = merge(...updatedValue);

        handleUpdateState({elements: _elements, currentBlock: _currentBlock});
        updateInlocalStorage();
    };
    const updateCanvasStyle = (value) => {
        setstate((prev) => ({
            ...prev,
            canvasStyle: {...prev.canvasStyle, ...value},
        }));
    };

    const saveOne = (data, payload) => {
        const {path, value} = payload;

        let prevKey;
        let updatedValue = path?.split("/").reduce((acc, key, index, arr) => {
            if (arr.length === index + 1) {
                return {...acc, [prevKey]: {...acc[prevKey], [key]: value}};
            } else {
                if (!acc[key]) {
                    acc[key] = {};
                }
                prevKey = key;
                return acc;
            }
        }, data);

        return updatedValue;
    };

    const updateElement = (elements) => {
        setstate((prev) => ({...prev, elements}));
        updateInlocalStorage();
    };

    const updateInlocalStorage = () => {
        const {elements, addedBlockLength} = state;
        localStorage.setItem(
            "_elements",
            JSON.stringify({elements, addedBlockLength})
        );
    };
    const updateCurrentBlock = (currentBlock) => {
        let elements = [...state.elements];
        elements[currentBlock.idx] = currentBlock.data;

        setstate((prev) => ({...prev, currentBlock, elements}));
        updateInlocalStorage();
    };
    const setCurrentBlock = (value) => {
        setstate((prev) => ({...prev, currentBlock: value}));
        updateInlocalStorage();
    };

    useEffect(() => {
        const {elements = [], addedBlockLength = 0} =
            JSON.parse(localStorage.getItem("_elements")) || {};
        const previewUrl = JSON.parse(
            localStorage.getItem("_previewUrl" || null)
        );
        setstate((prev) => ({
            ...prev,
            previewUrl,
            elements,
            addedBlockLength,
            loading: false,
        }));
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
                onSaveSettings,
                setCurrentBlock,
                updateCanvasStyle,
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
