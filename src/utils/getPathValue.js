import isObject from "./isObject";

const getPathValue = (path, resource) => {
    if (path === undefined) return "";
    return path
        .split("/")
        .filter((v) => v)
        .reduce(
            (acc, next) => (isObject(acc) ? acc[next] : undefined),
            resource
        );
};

export default getPathValue;
