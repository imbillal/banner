import React, {useCallback, useMemo} from "react";
import settingComponents from "../index";
import getModContent from "../../utils/getModContent";
import styled from "styled-components";
import getPath from "../../utils/getPath";
import getPathValue from "../../utils/getPathValue";

function RenderComponent(props) {
    const {module, data, onChange} = props;
    const modContent = useMemo(() => getModContent(module), [module]);
    const Component = settingComponents[modContent?.template];

    let path = React.useMemo(() => getPath(module), [module]);
    let value = getPathValue(path, data);

    const handleValueChange = useCallback(
        (payload) => {
            payload = Array.isArray(payload) ? payload : [payload];

            onChange(payload);
        },
        [onChange]
    );

    if (!modContent || !Component) {
        return null;
    }
    return (
        <ComponentWrapper>
            <Component path={path} value={value} onChange={handleValueChange} />
        </ComponentWrapper>
    );
}
const ComponentWrapper = styled.div``;

export default RenderComponent;
