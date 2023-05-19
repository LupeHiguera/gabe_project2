import React from "react";
import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Account } from "./Components/Account";

const App = () => {
    return(
        <Account>
            <Signup/>
            <Login/>
        </Account>
    )
}

export default App;
