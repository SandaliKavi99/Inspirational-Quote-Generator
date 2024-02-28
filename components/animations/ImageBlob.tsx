import React from "react";
import Image from "next/image";

interface ImageBlobProps{
    quoteReceived: String | null;
    bloUrl: String | null;
}
const ImageBlob = ({quoteReceived,bloUrl}: ImageBlobProps)=>{
    return(

        <div>ImageBlob</div>
    );
        
    
}

export default ImageBlob;