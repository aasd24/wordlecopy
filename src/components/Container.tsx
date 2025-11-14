import { useState } from "react";
import Row from "./Row";
import useKeyboard from "../hooks/useKeyboard";

function Container() {
    const [word, setWord] = useState("");

    useKeyboard((e) => {
        const key = e.key.toLowerCase();

        if ((word.length < 5) && (/^[a-z]$/.test(key))) {
            setWord((prev) => prev + key);
        }

        if (e.key === "Backspace") {
            setWord((prev) => prev.slice(0, -1));
        }
    })

    return (
        <>
            <div className="boxContainer">
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                {word}
            </div>
        </>
    )
}

export default Container;