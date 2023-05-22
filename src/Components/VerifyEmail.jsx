import React, { useState, useContext } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Pool from './UserPool';
import { AccountContext } from './Account';

const VerifyEmail = () => {
    const [email, setEmail] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const { authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        const user = new CognitoUser({ Username: email, Pool });

        user.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
            authenticate(email, 'password');
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Email</label>
                <input
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="confirmationCode">Confirmation Code</label>
                <input
                    value={confirmationCode}
                    onChange={event => setConfirmationCode(event.target.value)}
                />

                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

export default VerifyEmail;