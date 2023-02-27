const text = [
    {
        label: "General Styles",
        modules: [
            "attrs/text",
            {path: "attrs/fill", content: {label: "Text Color"}},
            "attrs/fontSize",
            "attrs/fontStyle",
            "attrs/width",
            "attrs/height",
            "attrs/textDecoration",
            "attrs/align",
            "attrs/verticalAlign",
            "attrs/lineHeight",
            "attrs/letterSpacing",
            "attrs/opacity",
            "attrs/fontVariant",
            "attrs/fontFamily",
        ],
    },
    {label: "Heighlight Text", modules: ["attrs/fill", "attrs/fontSize"]},
    {
        label: "Stroke",
        modules: ["attrs/strokeWidth", "attrs/stroke", "attrs/hitStrokeWidth"],
    },
];
export default text;
