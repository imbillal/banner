import React from "react";

export const EditorContext = React.createContext();
export const EditorContextProvider = ({children, value}) => {
    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    );
};
