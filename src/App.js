import React from "react";
import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Account } from "./Components/Account";
import Status from "./Components/Status";
import VerifyEmail from "./Components/VerifyEmail";

const App = () => {
    return(
        <Account>
            <Status/>
            <Signup/>
            <Login/>
            <VerifyEmail/>
        </Account>
    )
}

export default App;
