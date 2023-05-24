import React, { useState, useContext } from "react";
import { AccountContext} from "./Account";

export default () => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const { getSession } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label/>Current Password<label/>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <label>New Password</label>
                <input
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                />
                <button type="Submit">Change Password</button>
            </form>
        </div>
    )
}