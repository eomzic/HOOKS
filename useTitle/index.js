import React from "react";
import useTitle from "./useTItle";

const App = () => {
    useTitle("I Love U");
    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
};

export default App;
