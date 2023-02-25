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
                {/* {module.label && (
                    <Label
                        display={display}
                        module={module}
                        activeHover={activeHover}
                    >
                        {module.label} {module?.helpText}
                    </Label>
                )} */}
                <Component {...props} data={data} />
            </div>
        );
    }

    if (module.modules) {
        return (
            <>
                {/* {props.index !== undefined && module.label && (
                    <Label
                        display={display}
                        module={module}
                        activeHover={activeHover}
                    >
                        {module.label}
                    </Label>
                )} */}

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

const GroupItemsCollapse = styled.div`
    margin-top: 8px;
    margin-bottom: 16px;
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        padding: 6px;
        font-size: 12px;
        background: #f8f8f8;
        border-radius: 5px !important;
    }
    .ant-collapse
        > .ant-collapse-item
        > .ant-collapse-header
        > .ant-collapse-expand-icon {
        display: inline-block;
    }
    .ant-collapse-ghost
        > .ant-collapse-item
        > .ant-collapse-content
        > .ant-collapse-content-box {
        padding: 0;
    }
`;
const PanelHeader = styled.span`
    text-transform: uppercase;
    color: var(--color-primary-500);
    font-size: 11px;
`;
