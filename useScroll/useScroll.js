import { useState, useEffect } from "react";
import "./styles.css";

const useScroll = () => {
    const [state, setState] = useState({
        scrollX: 0,
        scrollY: 0,
    });

    const onScroll = () => {
        setState({ scrollX: window.scrollX, scrollY: window.scrollY });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
};

export default function App() {
    const { scrollY } = useScroll();

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1
                style={{
                    position: "fixed",
                    color: scrollY > 100 ? "red" : "blue",
                }}
            >
                Hi
            </h1>
        </div>
    );
}
