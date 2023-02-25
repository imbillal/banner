import React from "react";
import icons from "../../Icons";
function RenderIcon({icon: iconName, ...rest}) {
    const Icon = icons[iconName];

    if (!Icon) return null;
    return <Icon />;
}

export default RenderIcon;
