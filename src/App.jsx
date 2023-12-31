import React from "react"
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
    return (
        <Router>
            <Routes {...props} />
        </Router>
    );
}

export default App;
