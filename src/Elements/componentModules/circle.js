const text = [
    {
        label: "label 1",
        modules: [
            "attrs/fontStyle",
            "attrs/textDecoration",
            "attrs/_size",
            "attrs/lineHeight",
            "attrs/letterSpacing",
            "attrs/opacity",
            "attrs/fontVariant",
            {
                path: "attrs/text",
                content: {placeholder: "hello", template: "Textarea"},
            },
        ],
    },
    {label: "label 2", modules: ["attrs/fontSize"]},
];
export default text;
