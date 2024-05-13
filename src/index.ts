import HeaderView from "./components/Header/headerView";
import TagCreator from "./module/tagCreator";
// import RegistrationForm from "./pages/Registration/registrationForm";

const appWrapperTagCreator = new TagCreator('div', 'app-wrapper', 'appWrapper', 'body');
const appContainer = appWrapperTagCreator.createAndReturn();
const header = new HeaderView();
appContainer.append(header.getHeaderElement());
document.body.append(appContainer);

// if (localStorage.getItem("isLogined") === null) {
//   const registrationFormDiv = new RegistrationForm();
//   registrationFormDiv.createRegistrationForm();
// }
