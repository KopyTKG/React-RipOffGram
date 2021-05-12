import React from "react";
import { Container, Row } from "react-bootstrap";
import {motion} from 'framer-motion';


const ImageRow = ({Theme, Images, setImageSrc}) => {
    return(
        <Container>
            <Row>
                {/* render all imgs */}
                {Images && Images.map((row, index) => {
                    return(
                        <div
                            key={index}
                            className={`
                                block
                                w-full
                                flex
                                items-center
                                justify-center
                            `}
                        >
                            {row.map((image, index2) => {
                                return(
                                    <motion.div 
                                        key={index2}
                                        whileHover={{opacity: 1}}  
                                        xs="3" 
                                        className={`m-2`}
                                    >
                                        <div onClick={() => {setImageSrc(image.src)}}>
                                            <img 
                                                src={image.src}
                                                alt="slotImg"
                                                className={`
                                                preview
                                                border-solid
                                                border-0
                                                rounded`}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    );
                })}
            </Row>
        </Container>
    );
}

export default ImageRow;