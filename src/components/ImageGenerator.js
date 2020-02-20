import React from "react";



const ImageGenerator = ({getDate}) => {

    return (
        <div style={{ marginBottom: 20}}>
            <button onClick={getDate}>Random Image Generator</button>
        </div>
    )

}

export default ImageGenerator;