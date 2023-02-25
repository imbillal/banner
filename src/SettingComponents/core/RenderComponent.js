/*****************************************************
 * Packages
 ******************************************************/
import {notification} from "antd";
import React, {useMemo} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
// import condition from 'dynamic-condition';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*****************************************************
 * Locals
 ******************************************************/
import Label from "../Label";
// import Tooltip from '../../Tooltip';
import settingComponents from "../index";
// import { getAuthUser } from '../../../redux/selectors';
import getModContent from "../../utils/getModContent";
// import resolveValues from '../../../util/resolveValues';
// import validateMembership from '../../../util/validateMembership';
// import useEditorModal from '../../../hooks/useEditorModal';
// import RenderHelpText from "./RenderHelpText";

const StyledInput = styled.div`
    margin-bottom: 16px;
    margin-top: 8px;
    position: relative;

    &:last-child {
        margin-bottom: 0;
    }
`;

const LabelWrap = styled.div`
    display: flex;
    margin-top: ${(props) => (props.mt ? 0 : "20px")};
    justify-content: space-between;
`;

const ErrorSpan = styled.span`
    color: red;
    margin-top: 2px;
    font-size: 12px;
    position: absolute;
    display: inline-block;
    top: 100%;
    left: 0;
`;

function RenderComponent(props) {
    const {
        data,
        path,
        value,
        module,
        display,
        onChange,
        activeHover,
        parentModule,
        mqPlaceholder,
    } = props;
    // const user = useSelector(getAuthUser);

    const [errors, setErrors] = React.useState([]);

    const modContent = useMemo(() => getModContent(module), [module]);

    const handleBlur = React.useCallback(
        (event) => {
            const {value = ""} = event.target;
            if (!value) {
                return setErrors([]);
            }
            const {validation} = module;
            if (validation && typeof validation.validate !== "function") {
                const matched = value.trim().match(validation.validate);
                if (matched) {
                    setErrors([]);
                } else {
                    setErrors([validation.message]);
                }
            }
            // else if (typeof validation?.validate === 'function') {
            //     // TODO: call the validate exec func
            //     const isMatched = validation.validate(props.value);
            //     if (isMatched) {
            //         setErrors([]);
            //     } else {
            //         setErrors([validation.message]);
            //     }
            // }
        },
        [module]
    );

    const handleOnChange = React.useCallback((payload) => {
        const isInvalid =
            !payload ||
            (Array.isArray(payload)
                ? payload.some(({name}) => !name)
                : !payload.name);
        if (isInvalid)
            return notification.error({
                message: "Payload is not valid",
                placement: "bottomRight",
            });
        onChange(payload);
    }, []);

    React.useEffect(() => {
        handleBlur({target: {value}});

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // <-- componentDidMount

    if (!modContent) {
        return null;
    }

    // if (
    //     module.conditions &&
    //     !condition(resolveValues(module.conditions, data)).matches
    // ) {
    //     return null;
    // }

    const Component = settingComponents[modContent?.template] || "div";

    if (!path) {
        console.error("No path assigned for: " + module.label);
        return null;
    }

    // Help message for development ease
    if (!Component) {
        return (
            <p style={{color: "red"}}>
                No component found for `{path || modContent?.template}`
            </p>
        );
    }

    let visibleOn = "normal";
    if (Array.isArray(modContent.visibleOn)) {
        visibleOn = modContent.visibleOn;
    }

    if (activeHover && !visibleOn.includes("hover")) {
        if (parentModule?.hasOwnProperty("hoverable")) {
            if (!parentModule.hoverable) {
                return null;
            }
        } else {
            if (!modContent.hoverable) {
                return null;
            }
        }
    }

    // const enabled = validateMembership(parentModule?.membership, user);

    return (
        <StyledInput>
            {modContent.label && modContent.labelPosition === "block" && (
                <LabelWrap>
                    <Label
                        display={display}
                        module={modContent}
                        name={path}
                        value={value}
                        onBlur={handleBlur}
                        onChange={onChange}
                        activeHover={activeHover}
                    >
                        {modContent.label}
                    </Label>
                    {/* {modContent.info && (
                        <Tooltip
                            effect="hover"
                            placement="top-left"
                            content={modContent.info}
                        >
                            <FontAwesomeIcon
                                fixedWidth
                                icon={['fas', 'info-circle']}
                            />
                        </Tooltip>
                    )} */}
                </LabelWrap>
            )}

            <Component
                {...modContent}
                data={data}
                path={path}
                value={value}
                onBlur={handleBlur}
                onChange={onChange}
                hasError={!!errors.length}
                mqPlaceholder={mqPlaceholder}
                mutateOnChange={modContent.onChange}
            />
        </StyledInput>
    );
}

export default React.memo(RenderComponent);
