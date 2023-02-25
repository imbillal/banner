const components = {
    alignItems: {
        template: "Tab",
        inputType: "boxed",
        label: "Vertical Align",
        defaultValue: "flex-start",
        options: [
            {label: "Top", value: "flex-start"},
            {label: "Center", value: "center"},
            {label: "Bottom", value: "flex-end"},
        ],
    },

    color: {
        label: "Color",
        template: "ColorPicker",
    },
    align: {
        template: "Radio",
        inputType: "boxed",
        label: "Horizontal Align",
        isResponsible: true,
        defaultValue: "left",
        options: [
            {value: "left", icon: "AlignLeftOutlined"},
            {value: "center", icon: "AlignCenterOutlined"},
            {value: "right", icon: "AlignRightOutlined"},
        ],
    },
    verticalAlign: {
        template: "Radio",
        inputType: "boxed",
        label: "Horizontal Align",
        isResponsible: true,
        defaultValue: "left",
        options: [
            {value: "top", icon: "VerticalAlignTopOutlined"},
            {value: "center", icon: "VerticalAlignMiddleOutlined"},
            {value: "bottom", icon: "VerticalAlignBottomOutlined"},
        ],
    },
    fontSize: {
        labelPosition: "block",
        label: "Text Size",
        template: "Range",
    },
    radius: {
        labelPosition: "block",
        label: "Radius",
        template: "Range",
    },
    borderWidth: {
        labelPosition: "block",
        label: "Border Width",
        template: "Range",
    },
    borderStyle: {
        template: "Select",
        label: "Border Style",
        options: [
            {label: "dotted", value: "dotted"},
            {label: "dashed", value: "dashed"},
            {label: "solid", value: "solid"},
            {label: "double", value: "double"},
            {label: "groove", value: "groove"},
            {label: "ridge", value: "ridge"},
            {label: "inset", value: "inset"},
            {label: "outset", value: "outset"},
            {label: "none", value: "none"},
            {label: "hidden", value: "hidden"},
        ],
    },
    fontStyle: {
        label: "Font Style",
        template: "Radio",
        inputType: "boxed",
        defaultValue: "",
        options: [
            {value: "", label: "None"},
            {value: "bold", icon: "BoldOutlined"},
            {value: "italic", icon: "ItalicOutlined"},
        ],
    },
    textDecoration: {
        label: "Font Decoration",
        template: "Radio",
        inputType: "boxed",
        defaultValue: "",
        options: [
            {value: "", label: "None"},
            {value: "underline", icon: "UnderlineOutlined"},
            {value: "line-through", icon: "StrikethroughOutlined"},
        ],
    },
    strok: {
        label: "Stroke Width",
        labelPosition: "block",
        template: "Range",
    },

    styleAndDecuration: {
        label: "Text Style",
        template: "StyleAndDecuration",
        inputType: "boxed",
        defaultValue: "left",
        options: [
            {
                value: "bold",
                type: "fontStyle",
                icon: "BoldOutlined",
            },
            {value: "italic", type: "fontStyle", icon: "ItalicOutlined"},
            {
                value: "underline",
                type: "textDecoration",
                icon: "UnderlineOutlined",
            },
            {
                value: "line-through",
                type: "textDecoration",
                icon: "StrikethroughOutlined",
            },
        ],
    },
    text: {
        label: "Text",
        template: "Textarea",
        defaultUnit: "px",
        defaultValue: "16px",
        labelPosition: "block",
    },

    fontWeight: {
        template: "Select",
        defaultValue: "400",
        label: "Font Weight",
        options: [
            {name: "Light - 200", value: "200"},
            {name: "Regular - 400", value: "400"},
            {name: "Medium - 500", value: "500"},
            {name: "Bold - 600", value: "600"},
        ],
    },

    lineHeight: {
        label: "Line Height",
        labelPosition: "inline",
        placeholder: "type line height",
        template: "InputNumber",
    },
    letterSpacing: {
        label: "Letter Spacing",
        labelPosition: "inline",
        placeholder: "type line height",
        template: "InputNumber",
    },
    fontFamily: {
        label: "Font Family",
        placeholder: "Select Font Family",
        template: "FontFamily",
        labelPosition: "inline",
    },

    fontVariant: {
        template: "Select",
        inputType: "boxed",
        isResponsible: true,
        defaultValue: "none",
        label: "Text Transform",
        options: [
            {label: "None", value: ""},
            {label: "Lowercase", value: "normal"},
            {label: "Uppercase", value: "small-caps"},
        ],
    },

    opacity: {
        min: 0,
        max: 100,
        hoverable: true,
        label: "Opacity",
        template: "Range",
        labelPosition: "block",
    },
    rotate: {
        min: 0,
        max: 100,
        hoverable: true,
        label: "Rotate",
        defaultUnit: "deg",
        template: "Range",
        labelPosition: "block",
    },

    width: {
        max: 100,
        info: "Width of the content",
        label: "Width",
        defaultUnit: "%",
        template: "Range",
        path: "style/width",
        placeholder: "auto",
        isResponsible: true,
    },
    backgroundColor: {
        hoverable: true,
        inputType: "color",
        template: "ColorPicker",
        label: "Background Color",
    },

    height: {
        label: "Height",
        labelPosition: "block",
        template: "Range",
    },
    maxHeight: {
        min: 100,
        max: 1000,
        defaultUnit: "px",
        template: "Range",
        placeholder: "auto",
        label: "Max Height",
        isResponsible: true,
    },

    zIndex: {
        label: "Z-Index",
        template: "Range",
        defaultValue: "",
        placeholder: "auto",
    },

    filter: {
        "hue-rotate": {
            max: 360,
            template: "Range",
            defaultUnit: "deg",
            label: "Hue Rotate",
            labelWidth: "98px",
            defaultValue: "0deg",
            labelPosition: "block",
        },
        saturate: {
            min: 0,
            max: 200,
            defaultUnit: "%",
            template: "Range",
            label: "Saturation",
            labelWidth: "98px",
            defaultValue: "100%",
            labelPosition: "block",
        },
        brightness: {
            min: 0,
            max: 200,
            defaultUnit: "%",
            template: "Range",
            label: "Brightness",
            labelWidth: "98px",
            defaultValue: "100%",
            labelPosition: "block",
        },
        dropShadow: {
            hoverable: true,
            defaultUnit: "px",
            template: "Range",
            label: "Drop Shadow",
        },
        contrast: {
            min: 0,
            max: 200,
            defaultUnit: "%",
            label: "Contrast",
            template: "Range",
            labelWidth: "98px",
            defaultValue: "100%",
            labelPosition: "block",
        },
        sepia: {
            min: 0,
            max: 100,
            label: "Sepia",
            defaultUnit: "%",
            template: "Range",
            defaultValue: "0%",
            labelWidth: "98px",
            labelPosition: "block",
        },
        grayscale: {
            min: 0,
            max: 100,
            defaultUnit: "%",
            label: "Grayscale",
            template: "Range",
            defaultValue: "0%",
            labelWidth: "98px",
            labelPosition: "block",
        },
        invert: {
            min: 0,
            max: 100,
            label: "Invert",
            defaultUnit: "%",
            template: "Range",
            defaultValue: "0%",
            labelWidth: "98px",
            labelPosition: "block",
        },
        opacity: {
            min: 0,
            max: 100,
            hoverable: true,
            label: "Opacity",
            defaultUnit: "%",
            template: "Range",
            labelWidth: "98px",
            labelPosition: "block",
            defaultValue: "100%",
        },
        blur: {
            max: 20,
            label: "Blur",
            hoverable: true,
            defaultUnit: "px",
            template: "Range",
            labelWidth: "98px",
            labelPosition: "block",
            defaultValue: "0px",
        },
    },
    textShadow: {
        x: {
            template: "Range",
            defaultUnit: "px",
            labelWidth: "98px",
            label: "Horizontal",
            labelPosition: "block",
        },
        y: {
            template: "Range",
            defaultUnit: "px",
            labelWidth: "98px",
            label: "Vertical",
            labelPosition: "block",
        },
        blur: {
            label: "Blur",
            defaultUnit: "px",
            template: "Range",
            labelWidth: "98px",
            labelPosition: "block",
        },
        color: {
            hoverable: true,
            template: "ColorPicker",
            label: "Text Shadow Color",
        },
        _enabled: {
            onValue: true,
            onLabel: "ON",
            offValue: false,
            offLabel: "OFF",
            template: "Switch",
            defaultValue: false,
            labelPosition: "block",
            label: "Text Shadow",
        },
    },

    transition: {
        max: 1000,
        defaultValue: "",
        defaultUnit: "ms",
        template: "Range",
        allowedUnits: ["ms", "s"],
        label: "Hover Transition",
    },
};

export default components;
