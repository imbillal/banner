import {makeBoxShadowSetting} from "../../utils/makeBoxShadow";
const image = [
    {
        label: "General Styles",
        modules: [
            {
                path: "attrs/src",
                content: {
                    template: "InputURL",
                    placeholder: "Type Image URl",
                    label: "URL",
                },
            },
            "attrs/width",
            "attrs/height",
        ],
    },
    {
        label: "Background",
        modules: ["attrs/fill"],
    },
    {
        label: "Shadow",
        modules: [
            // {
            //     path: "attrs/shadowEnabled",
            //     content: {
            //         label: "Shadow Enabled",
            //     },
            // },
            ...makeBoxShadowSetting(),
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
export default image;
