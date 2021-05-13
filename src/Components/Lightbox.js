import React, {useState} from "react";

import '../style/lightbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageRow from "./assets/ImageRow";
import Modal from "./assets/Modal";

const Lightbox = ({Theme, setPosition}) => {
    const [ImageSrc, setImageSrc] = useState(null);

    // images can be accest from api call just need to be in this format ( array of json obj with param src: "src")

    /*
    * Update 1.0.1
    * Images structure -> independent rows
    */
    const Images = [ 
        [
            {src: "https://cdn.pixabay.com/photo/2018/03/25/18/10/tree-3260164_960_720.jpg"},
            {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
            {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"}
        ],
        [
            {src: "https://cdn.pixabay.com/photo/2018/03/25/18/10/tree-3260164_960_720.jpg"},
            {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
            {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"}
        ],
        [
            {src: "https://cdn.pixabay.com/photo/2018/03/25/18/10/tree-3260164_960_720.jpg"},
            {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"},
            {src: "https://cdn.pixabay.com/photo/2016/04/04/16/04/waterfall-1307510_960_720.jpg"}
        ]
    ];
    return(
        <>
            {/* Website display */}
            <ImageRow Theme={Theme} Images={Images} ImageSrc={ImageSrc} setImageSrc={setImageSrc} />
            {/* Lightbox it self */}
            {ImageSrc && (
                <Modal Theme={Theme} ImageSrc={ImageSrc} setImageSrc={setImageSrc} />
            )}
        </>
    );

}

export default Lightbox;