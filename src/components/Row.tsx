import Box from "./Box";

interface props {
    word: string;
}

function Row(props: props) {
    return (
        <div className="row">  
            {Array.from({ length: 5 }).map((_, index) => (
                <Box key={index} letter={props.word[index] || ""} />
            ))}
        </div>
    )
}

export default Row;