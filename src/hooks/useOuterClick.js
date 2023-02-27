import {useState, useRef, useEffect} from "react";

const useOuterClick = (callback) => {
    const innerRef = useRef();
    const callbackRef = useRef();

    // set current callback in ref, before second useEffect uses it
    useEffect(() => {
        // useEffect wrapper to be safe for concurrent mode
        callbackRef.current = callback;
    });

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);

        // read most recent callback and innerRef dom node from refs
        function handleClick(e) {
            if (
                innerRef.current &&
                callbackRef.current &&
                !innerRef.current.contains(e.target)
            ) {
                callbackRef.current(e);
            }
        }
    }, []);

    return innerRef;
};

export default useOuterClick;
