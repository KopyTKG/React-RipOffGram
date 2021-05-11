import React from "react";
import { Container, Row } from "react-bootstrap";
import {motion} from 'framer-motion';


const ImageRow = ({Images, setImageSrc}) => {
    return(
        <Container>
            <Row>
                {/* render all imgs */}
                {Images && Images.map((image, índex) => {
                    return(
                    <motion.div 
                        whileHover={{opacity: 1}}  
                        xs="3" 
                        className="slot col"
                    >
                        <div onClick={() => {setImageSrc(image.src)}}>
                            <img 
                                src={image.src}
                                alt={índex}
                                className="preview"
                            />
                        </div>
                    </motion.div>
                    );
                })}
            </Row>
        </Container>
    );
}

export default ImageRow;