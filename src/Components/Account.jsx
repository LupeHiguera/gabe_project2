import React, { createContext } from "react";
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";
import Pool from "./UserPool";

const AccountContext = createContext(undefined);

const Account = (props) => {
    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession(async(err, session) => {
                    if (err) {
                        reject("Failed to get session: " + err);
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const results = {};

                                    for (let attribute of attributes){
                                        const { Name, Value} = attribute;
                                        results[Name] = Value;
                                    }

                                    resolve(results);
                                }
                            });
                        });

                        resolve(user, session, attributes);
                    }
                });
                } else {
                reject("No current user");
            }
        });
    };
    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) =>{
            const user = new CognitoUser({Username, Pool});

            const authDetails = new AuthenticationDetails({Username, Password});

            user.authenticateUser(authDetails, {
                onSuccess: (data) =>{
                    console.log("onSuccess: ", data);
                    resolve(data);
                    },
                    onFailure: (err) => {
                        console.log("onFailure: ", err);
                        reject(err);
                    },
                    newPasswordRequired: (data) => {
                        console.log("newPasswordRequired: ", data);
                        resolve(data);
                    }
            })
        });
    };
    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user){
            user.signOut();
        }
    }

    return (
        <AccountContext.Provider value={{authenticate, getSession, logout}}>
        {props.children}
    </AccountContext.Provider>
    );
};
export {Account, AccountContext};