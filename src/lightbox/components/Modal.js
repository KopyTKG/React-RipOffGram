import {motion} from 'framer-motion';

const Modal = ({Theme, ImageSrc, setImageSrc}) => {
    // Close event
    const handleClick = (e) => {
        // Background need to have backdrop class
        if(e.target.classList.contains("background")) 
            // reset imgSrc
            setImageSrc(null);
    }

    return(
        <motion.div 
            className={`
            backdrop
            block
            flex
            items-center
            justify-center
            `}
            onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.div className={`background transition 
            duration-500 ease-in-out
            bg-gradient-to-br
            ${Theme? "from-black to-blue-300" : "from-white to-yellow-200"}
            opacity-70`}/>

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