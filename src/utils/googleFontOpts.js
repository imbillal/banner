import fonts from "../webfont.json";

export const googleFontOpts = fonts.map((font) => ({
    label: font.family,
    value: font.family,
}));
