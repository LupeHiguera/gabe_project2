import React, { useState } from "react";
import UserPool from "./UserPool";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [user, setNewUser] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if(err) {
                console.error(err);
            }
            setNewUser = data.user;
            // Pass New User to a sign in
            console.log(data);
        })
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;