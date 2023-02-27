import {makeBoxShadowSetting} from "../../utils/makeBoxShadow";
const image = [
    {
        label: "General Styles",
        modules: [
            {
                path: "data/_src",
                content: {
                    template: "InputURL",
                    placeholder: "Type Image URl",
                    label: "URL",
                },
            },
            "data/width",
            "data/height",
        ],
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
            ...makeBoxShadowSetting(),
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
