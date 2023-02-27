const text = [
    {
        label: "General Styles",
        modules: [
            "data/text",
            {path: "data/fill", content: {label: "Text Color"}},
            "data/fontSize",
            "data/fontStyle",
            "data/width",
            "data/height",
            "data/textDecoration",
            "data/align",
            "data/verticalAlign",
            "data/lineHeight",
            "data/letterSpacing",
            "data/opacity",
            "data/fontVariant",
            "data/fontFamily",
        ],
    },
    {label: "Heighlight Text", modules: ["data/fill", "data/fontSize"]},
    {
        label: "Stroke",
        modules: ["data/strokeWidth", "data/stroke", "data/hitStrokeWidth"],
    },
];
export default text;
