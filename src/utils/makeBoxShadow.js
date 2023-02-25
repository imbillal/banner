export const makeBoxShadowSetting = ({prefix = "style"}) => {
    return [
        {
            path: `${prefix}/shadowBlur`,
            content: {
                template: "Range",
                label: "Blur",
            },
        },
        {
            path: `${prefix}/shadowOffset`,
            content: {
                template: "Range",
                label: "Background Style",
            },
        },
        {
            path: `${prefix}/shadowOffsetX`,
            content: {
                template: "Range",
                label: "Horizontal Offset",
            },
        },
        {
            path: `${prefix}/shadowOffsetY`,
            content: {
                template: "Range",
                label: "Vertical Offset",
            },
        },
        {
            path: `${prefix}/shadowOpacity`,
            content: {
                template: "Range",
                label: "Blur",
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
