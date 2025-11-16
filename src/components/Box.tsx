import { motion } from "motion/react";

interface props {
    letter: string,
    shouldScale: boolean,
}

function Box(props: props) {
    return (
        <motion.div 
        className="box"
        animate={{
            width: props.shouldScale ? 90 : 45,
            y: (props.letter !== "") ? [-5, 0] : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            {props.letter}
        </motion.div>
    )
}

export default Box;