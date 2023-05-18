import {CognitoUser, CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_AxiuspQN1",
    ClientId: "uejpvshobihgmbapi7s1nnpko"
}

export default new CognitoUserPool(poolData);