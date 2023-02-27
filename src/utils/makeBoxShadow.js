export const makeBoxShadowSetting = ({prefix = "attrs"} = {}) => {
    return [
        {
            path: `${prefix}/shadowBlur`,
            content: {
                template: "Range",
                label: "Blur",
                labelPosition: "block",
            },
        },
        {
            path: `${prefix}/shadowOffset`,
            content: {
                template: "Range",
                label: "shadow Offset",
                labelPosition: "block",
            },
        },
        {
            path: `${prefix}/shadowOffsetX`,
            content: {
                template: "Range",
                label: "Horizontal Offset",
                labelPosition: "block",
            },
        },
        {
            path: `${prefix}/shadowOffsetY`,
            content: {
                template: "Range",
                label: "Vertical Offset",
                labelPosition: "block",
            },
        },
        {
            path: `${prefix}/shadowOpacity`,
            content: {
                template: "Range",
                label: "Blur",
                labelPosition: "block",
            },
        },
        {
            path: `${prefix}/shadowColor`,
            content: {
                labelPosition: "inline",
                template: "ColorPicker",
                label: "Color",
            },
        },
    ];
};
