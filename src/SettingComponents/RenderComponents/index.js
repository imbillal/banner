import React from "react";
import RenderModule from "./RenderModule";
import RenderComponent from "./RenderComponent";
import settingComponents from "../../SettingComponents";

function RenderTemplate(props) {
    const {module, parentModule, ...restOfProps} = props;
    const {data} = restOfProps;

    if (module.template) {
        const Component = settingComponents[module.template] || "div";
        return (
            <Component
                {...props}
                // display={display}
                data={data}
            />
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
        return <RenderModule {...props} parentModule={parentModule} />;
    }
}

export default RenderTemplate;
