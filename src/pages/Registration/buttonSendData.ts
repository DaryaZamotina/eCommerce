import '../../../public/assets/css/body.css';
import { forwardRegDatatoServer } from '../Registration/sendDataToEcomm';
import { directMoveToMainPage } from '../LoginPage/buttonsToRegToHome';
//import { receiveAccessToken } from '../LoginPage/loginGetToken';

export function puButtonSendDataToEcomm() {
    const buttonToSendRegDataToServer = document.getElementById(
        'registrationForm__button',
    ) as HTMLButtonElement;

    buttonToSendRegDataToServer.addEventListener('click', function () {
        const tokenForAuth = localStorage.getItem('access_token_auth');
        forwardRegDatatoServer(tokenForAuth);
        directMoveToMainPage();
    });
}

/*
const buttonToSendRegDataToServer = document.getElementById("buttonToSendRegDataToServer");

buttonToSendRegDataToServer.addEventListener("click", function(event) {
    forwardRegDatatoServer();
}); */
