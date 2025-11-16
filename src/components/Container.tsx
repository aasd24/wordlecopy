import { useEffect, useState } from "react";
import Row from "./Row";
import useKeyboard from "../hooks/useKeyboard";
import useKeyPress from "../hooks/useKeyPress";

function Container() {
    const [word, setWord] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [currentRow, setCurrentRow] = useState(0);
    const [finished, setFinished] = useState(false);

    useKeyboard((e) => {
        if (finished) return;

        const key = e.key.toLowerCase();

        if ((word.length < 5) && (/^[a-z]$/.test(key))) {
            setWord((prev) => prev + key);
        }
    })

    useKeyPress("Backspace", () => {
        setWord((prev) => prev.slice(0, -1));
    })

    useKeyPress("Enter", () => {
        if ((currentRow === 5) || (word === "apple")) {
            setFinished(true);
        }

        if (word.length === 5) {
            setWords((prev) => [...prev, word]);
            setWord("");
            setCurrentRow((prev) => prev + 1)
        }
        
    })

    useEffect(() => {
        if (finished) {
            alert("Game Over - Word was apple.");
        }
    }, [finished])

    return (
        <>
            <div className="boxContainer">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Row 
                        key={index} 
                        word={words[index] || (index === currentRow ? word : "")}
                        shouldScale={finished ? (index <= currentRow - 1) : (index <= currentRow)}
                        shouldShowColor={index < currentRow}
                    />
                ))}
            </div>
        </>
    )
}

export default Container;