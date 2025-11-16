import Box from "./Box";

interface props {
    word: string;
    shouldScale: boolean;
    shouldShowColor: boolean;
}

function Row(props: props) {
    return (
        <div className="row">  
            {Array.from({ length: 5 }).map((_, index) => (
                <Box 
                    key={index} 
                    letter={props.word[index] || ""} 
                    shouldScale={props.shouldScale}
                    shouldShowColor={props.shouldShowColor}
                    color={props.word[index] === "apple"[index] ? "correct" : "absent"}
                />
            ))}
        </div>
    )
}

export default Row;