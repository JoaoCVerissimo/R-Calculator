import React from "react";
import './App.css';
import Display from "./Display"
import Panel from "./Panel"


function App() {
    return (
        <div id="root">
            <div className="app">
                <Display />
                <Panel />
            </div>
        </div>
    )
}

export default App;
