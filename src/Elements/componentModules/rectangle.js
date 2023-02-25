const text = [
    {
        label: "area",
        modules: [
            "data/align",
            {
                path: "data/fill",
                content: {
                    template: "ColorPicker",
                    label: "Color",
                    labelPosition: "inline",
                },
            },
            "data/verticalAlign",
            "data/lineHeight",
            "data/letterSpacing",
            "data/opacity",
            "data/fontVariant",
            "data/fontFamily",
        ],
    },
    {label: "label", modules: ["data/fontSize"]},
];
export default text;
