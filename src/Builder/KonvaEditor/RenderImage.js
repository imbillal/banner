import React, {forwardRef} from "react";
import {Image} from "react-konva";

const RenderImage = forwardRef((props, ref) => {
    const image = new window.Image();
    image.src = props.src;

    return (
        <div>
            <Image ref={ref} {...props} image={image} />
        </div>
    );
});

export default RenderImage;
