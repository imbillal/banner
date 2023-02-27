import styled from "styled-components";
import {Collapse} from "antd";
import React from "react";
/*****************************************************
 * Locals
 ******************************************************/
import RenderModule from "./RenderModule";
import settingComponents from "../index";
// import useCheckFeatureFlag from "../../../hooks/useCheckFeatureFlag";

const RenderTemplate = React.memo(function _RenderTemplate(props) {
    const {module, parentModule, index, ...restOfProps} = props;
    const {data} = restOfProps;

    // Render provided template
    if (module.template) {
        const Component = settingComponents[module.template] || "div";

        return (
            <div style={{marginTop: 8, marginBottom: 16}}>
                <Component {...props} data={data} />
            </div>
        );
    }

    if (module.modules) {
        return (
            <>
                {module.modules.map((childMod, modIndex) => (
                    <RenderTemplate
                        key={modIndex}
                        index={modIndex}
                        module={childMod}
                        parentModule={module}
                        {...restOfProps}
                    />
                ))}
            </>
        );
    } else {
        return (
            <RenderModule {...props} data={data} parentModule={parentModule} />
        );
    }
});

export default RenderTemplate;
