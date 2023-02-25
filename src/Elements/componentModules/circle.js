const text = [
    {
        label: "label 1",
        modules: [
            "data/fontStyle",
            "data/textDecoration",
            "data/align",
            "data/verticalAlign",
            "data/lineHeight",
            "data/letterSpacing",
            "data/opacity",
            "data/fontVariant",
            {
                path: "data/text",
                content: {placeholder: "hello", template: "Textarea"},
            },
        ],
    },
    {label: "label 2", modules: ["data/fontSize"]},
];
export default text;
