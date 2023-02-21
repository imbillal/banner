import React, {useContext} from "react";
import {NavWrap} from "./Nav.stc";
import {Menu} from "antd";
import {EditorContext} from "../../context/elementContext";
import {NavLink, useHistory} from "react-router-dom";

function Navigation() {
    const history = useHistory();
    const {canvasRef, handleUpdateState} = useContext(EditorContext);
    const handlePreview = async () => {
        handleUpdateState({previewUrl: canvasRef.current.toDataURL()});
        history.push("/preview");
    };
    return (
        <NavWrap>
            <Menu mode="horizontal">
                <Menu.Item className="nav-item logo">Dorik Logo</Menu.Item>
                <Menu.Item className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item className="nav-item">About</Menu.Item>
                <Menu.Item className="nav-item" onClick={handlePreview}>
                    Preview
                </Menu.Item>
            </Menu>
        </NavWrap>
    );
}

export default Navigation;
