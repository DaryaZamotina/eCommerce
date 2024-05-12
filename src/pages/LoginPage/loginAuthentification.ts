import {projectKey} from "./loginGetToken"
import { testAPIclient } from "./loginGetToken";

const linkForChecking: string = "https://auth.us-east-2.aws.commercetools.com/oauth/jffecommerce/customers/token"; 

export function sendDataToEComm(){

    const emailLogin: string = localStorage.getItem("email");
    const passwordLogin: string = localStorage.getItem("password"); 

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
            return JSON.stringify(resp);
        }
        
        checkPasswordFlowForUser(linkForChecking)  
            .then(info => {
            localStorage.setItem("userLogin", info);
            
            const infoJSON = JSON.parse(info);
            console.log("access_token_for_user = " + infoJSON.access_token);
            console.log("refresh_token_for_user = " + infoJSON.refresh_token);
            localStorage.setItem("access_token_for_user", infoJSON.access_token);
            localStorage.setItem("refresh_token_for_user", infoJSON.refresh_token);

            if (infoJSON.statusCode == 400) {
                const error: string = infoJSON.message;
                const messageAboutError: HTMLElement = document.getElementById("messageAboutError");
                messageAboutError.textContent = infoJSON.message;
            }

            return info;
            })
            .catch(err => console.log(err));
}