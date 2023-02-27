export const defaultElements = {
    Text: {
        attrs: {
            text: "Simple Text",
            x: 300,
            y: 100,
            strokeDasharray: 0,
            fontSize: 30,
            fontFamily: "Calibri",
            fill: "green",
            stroke: "red",
            strokeWidth: 1,
        },
        type: "text",
        className: "Text",
    },
    Rectangle: {
        attrs: {
            x: 300,
            y: 100,
            width: 100,
            height: 100,
            fill: "green",
            color: "yellow",
        },
        type: "rect",
        className: "Rect",
    },
    Image: {
        className: "Image",
        type: "image",
        attrs: {
            width: 100,
            height: 100,
            x: 300,
            y: 100,
            src: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
        },
    },
    Circle: {
        className: "Circle",
        type: "circle",
        attrs: {
            x: 300,
            y: 100,
            radius: 70,
            fill: "red",
            stroke: "black",
            strokeWidth: 4,
        },
    },
    Star: {
        className: "Star",
        type: "star",
        attrs: {
            x: 300,
            y: 100,
            numPoints: 5,
            innerRadius: 40,
            outerRadius: 70,
            fill: "red",
            stroke: "black",
            strokeWidth: 4,
        },
    },
};

export const defaultElementsOpts = Object.keys(defaultElements).map(
    (element) => ({
        label: element,
        value: element,
    })
);
