import moduleResources from "../editorResources";
import getPathValue from "./getPathValue";
import isObject from "./isObject";

const getModContent = (module) => {
    if (typeof module === "string") {
        return getPathValue(module, moduleResources);
    }
    if (isObject(module)) {
        const {path, content} = module;

        if (path) {
            const defaultContent = getPathValue(path, moduleResources);
            return {...defaultContent, ...content};
        }
        return content;
    }
};

export default getModContent;
