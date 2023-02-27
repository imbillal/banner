const image = [
    {
        label: "General Styles",
        modules: ["data/width", "data/height", "data/opacity"],
    },
    {
        label: "Background",
        modules: ["data/fill"],
    },
    {
        label: "Shadow",
        modules: [
            {
                path: "data/shadowEnabled",
                content: {
                    label: "Shadow Enabled",
                },
            },
            "data/shadowOffsetX",
            "data/shadowOffsetY",
            "data/shadowBlur",
            "data/shadowColor",
        ],
    },
    {
        label: "Border",
        modules: [
            {
                path: "data/strokeWidth",
                content: {
                    component: "Range",
                    label: "Border Width",
                },
            },
            {
                path: "data/stroke",
                content: {
                    component: "ColorPicker",
                    label: "Border Color",
                },
            },
            "data/cornerRadius",
            // "data/shadowOffsetY",
            // "data/shadowBlur",
            // "data/shadowColor",
        ],
    },
];
export default image;
