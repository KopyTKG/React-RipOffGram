import React, {useState} from "react";

import '../style/lightbox.css';

import ImageRow from "./ImageRow";
import Modal from "./Modal";

const Lightbox = () => {
    const [ImageSrc, setImageSrc] = useState(null);

    // images can be accest from api call just need to be in this format ( array of json obj with param src: "src")
    const Images = [
        {src: "https://cdn.pixabay.com/photo/2018/03/25/18/10/tree-3260164_960_720.jpg"},
        {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
        {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
        {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
        {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
        {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"}
    ];
    return(
        <div>
            {/* Website display */}
            <ImageRow Images={Images} ImageSrc={ImageSrc} setImageSrc={setImageSrc} />
            {/* Lightbox it self */}
            {ImageSrc && (
                <Modal ImageSrc={ImageSrc} setImageSrc={setImageSrc} />
            )}
        </div>
    );

}

export default Lightbox;