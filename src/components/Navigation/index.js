import React, {useContext} from "react";
import {NavWrap} from "./Nav.stc";
import {Menu} from "antd";
import {EditorContext} from "../../context/elementContext";
import {NavLink, useHistory} from "react-router-dom";

function Navigation() {
    const history = useHistory();
    const {canvasRef, handleUpdateState} = useContext(EditorContext);
    const handlePreview = async () => {
        await handleUpdateState({currentBlock: null});
        handleUpdateState({
            previewUrl: canvasRef.current.toDataURL(),
        });
        history.push("/preview");
    };
    return (
        <NavWrap>
            <Menu mode="horizontal">
                <li className="nav-item logo">
                    <NavLink to="/">Dorik Logo</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item" onClick={handlePreview}>
                    <NavLink exact to="/">
                        Preview
                    </NavLink>
                </li>
            </Menu>
        </NavWrap>
    );
}

export default Navigation;
