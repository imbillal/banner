const text = [
    {
        label: "General Styles",
        modules: ["attrs/width", "attrs/height", "attrs/opacity"],
    },
    {
        label: "Background",
        modules: ["attrs/fill"],
    },
    {
        label: "Shadow",
        modules: [
            {
                path: "attrs/shadowEnabled",
                content: {
                    label: "Shadow Enabled",
                },
            },
            "attrs/shadowOffsetX",
            "attrs/shadowOffsetY",
            "attrs/shadowBlur",
            "attrs/shadowColor",
        ],
    },
    {
        label: "Border",
        modules: [
            {
                path: "attrs/strokeWidth",
                content: {
                    component: "Range",
                    label: "Border Width",
                },
            },
            {
                path: "attrs/stroke",
                content: {
                    component: "ColorPicker",
                    label: "Border Color",
                },
            },
            "attrs/cornerRadius",
            // "attrs/shadowOffsetY",
            // "attrs/shadowBlur",
            // "attrs/shadowColor",
        ],
    },
];
export default text;
