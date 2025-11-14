import { useEffect } from "react";

function useKeyboard(callback: (e: KeyboardEvent) => void) {
    useEffect(() => {
        window.addEventListener("keydown", callback);

        return () => {
            window.removeEventListener("keydown", callback)
        };
    })
}

export default useKeyboard;