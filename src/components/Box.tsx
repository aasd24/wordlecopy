import { motion } from "motion/react";

interface props {
    letter: string,
    shouldScale: boolean,
    shouldShowColor: boolean,
    color: "absent" | "present" | "correct" | "default"
}

function Box(props: props) {
    const colors = {
        absent: "#BBB8B2",
        present: "#FFF689",
        correct: "#CFFFB0",
        default: "#FFFFFF"
    };


    return (
        <motion.div 
        className="box"
        animate={{
            width: props.shouldScale ? 90 : 45,
            y: (props.letter !== "") ? [-5, 0] : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ backgroundColor: props.shouldScale ? 
            (props.shouldShowColor ? colors[props.color] : colors["default"])
            : colors["absent"]
        }}>
            {props.letter}
        </motion.div>
    )
}

export default Box;