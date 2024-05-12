import RegistrationForm from "../../pages/Registration/registrationForm";

export function moveToRegistration() {
    const buttonRegistration = document.getElementById("buttonRegistration");

    buttonRegistration.addEventListener("click", function() {
        const loginFormDiv = document.getElementById("loginForm");
        loginFormDiv.remove();
        buttonRegistration.remove();
        const buttonLogin = document.getElementById("buttonLogin");
        buttonLogin.remove();
        const registrationFormDiv = new RegistrationForm();
        registrationFormDiv.createRegistrationForm();
    });
}

export function moveToMainPage() {
    const buttonToMainPage = document.getElementById("buttonToMainPage");

    buttonToMainPage.addEventListener("click", function() {
        directMoveToMainPage()
});
}

export function directMoveToMainPage() {
    const body = document.getElementById("body");
    body.innerHTML = "";
    body.textContent = "MAIN PAGE";
}
