import {motion} from 'framer-motion';

const Modal = ({ImageSrc, setImageSrc}) => {
    // Close event
    const handleClick = (e) => {
        // Background need to have backdrop class
        if(e.target.classList.contains("backdrop")) 
            // reset imgSrc
            setImageSrc(null);
    }

    return(
        <motion.div 
            className="backdrop background" 
            onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img
                src={ImageSrc}
                alt="lightboxImg"
                initial={{y: "-100vh"}}
                animate={{y: 0}}
                className="display"
                
            />
        </motion.div>
    );
}

export default Modal;