import { useEffect } from "react";

function useKeyPress(key: string, callback: (e: KeyboardEvent) => void) {
    useEffect(() => {
        function onKeyPress(e: KeyboardEvent) {
            if (e.key === key) {
                callback(e);
            }
        }

        window.addEventListener("keydown", onKeyPress);

        return () => {
            window.removeEventListener("keydown", onKeyPress)
        };
    });
}

export default useKeyPress;