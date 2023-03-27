import "./styles.css";
import React, { useState, useEffect } from "react";

const App = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, []); //function (실행할 함수), [] (조건)
    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
};

export default App;
