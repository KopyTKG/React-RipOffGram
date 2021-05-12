import React from "react";
import { Container, Row } from "react-bootstrap";
import {motion} from 'framer-motion';


const ImageRow = ({Theme, Images, setImageSrc}) => {
    return(
        <Container>
            <Row>
                {/* render all imgs */}
                {Images && Images.map((row, índex) => {
                    return(
                        <div
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
                                        whileHover={{opacity: 1}}  
                                        xs="3" 
                                        className={`m-2`}
                                    >
                                        <div onClick={() => {setImageSrc(image.src)}}>
                                            <img 
                                                src={image.src}
                                                alt={índex}
                                                className={`
                                                preview
                                                ${Theme? "border-white": "border-gray-600"}
                                                border-solid
                                                border-4
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