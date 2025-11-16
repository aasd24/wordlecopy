import Box from "./Box";

interface props {
    word: string;
    shouldScale: boolean;
}

function Row(props: props) {
    return (
        <div className="row">  
            {Array.from({ length: 5 }).map((_, index) => (
                <Box 
                    key={index} 
                    letter={props.word[index] || ""} 
                    shouldScale={props.shouldScale}
                />
            ))}
        </div>
    )
}

export default Row;