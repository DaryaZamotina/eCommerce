import { getAccessToken } from "../../index";
import {projectKey} from "./loginForm"
import LoginForm from "./loginFormButtons";
import { testAPIclient } from "./loginForm";
import { receiveAccessToken } from "./loginForm";

//import {inputLoginEmail, inputLoginPassword} from "./loginFormButtons"

//const accessTokenForAuth = getAccessToken();
//console.log("accessTokenForAuth" + accessTokenForAuth);

const emailLogin: string = localStorage.getItem("email");
console.log(emailLogin);
const passwordLogin: string = localStorage.getItem("password");
console.log(passwordLogin);
// check of existing user test5 ------------ 
/*const urlForUser = "https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/a71554f9-1e6f-4781-a9b5-f0bac0a6f9d5";

async function getUserInfo(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessTokenForAuth}`,
        }
    });
    const resp = await response.json();
    return JSON.stringify(resp);
}

getUserInfo(urlForUser)  
    .then(info => {
    localStorage.setItem("user", info);
    return info;
    })
    .catch(err => console.log(err));
*/
//--------------------------------

// -------- forwarding data of the user to ecomm for receiving access_token and refresh_token

const linkForChecking: string = "https://auth.us-east-2.aws.commercetools.com/oauth/jffecommerce/customers/token"; 

export function sendDataToEComm(){
    receiveAccessToken();
    const accessTokenForAuth = getAccessToken();
    console.log("accessTokenForAuth" + accessTokenForAuth);

        async function checkPasswordFlowForUser (url: string) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${testAPIclient.getKeyOfClient()}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'grant_type': 'password',
                    'username': `${emailLogin}`,
                    'password': `${passwordLogin}`,
                    'scope': `manage_customers:${projectKey}`
                })
            });
            const resp = await response.json();
            console.log("JSON.stringify(resp) = " + JSON.stringify(resp));
            return JSON.stringify(resp);
        }
        
        checkPasswordFlowForUser(linkForChecking)  
            .then(info => {
            localStorage.setItem("userLogin", info);
            const infoJSON = JSON.parse(info);
            console.log("access_token_for_user" + infoJSON.access_token);
            console.log("refresh_token_for_user" + infoJSON.refresh_token);
            localStorage.setItem("access_token_for_user", infoJSON.access_token);
            localStorage.setItem("refresh_token_for_user", infoJSON.refresh_token);
            return info;
            })
            .catch(err => console.log(err));
}