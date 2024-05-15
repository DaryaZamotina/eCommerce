import AppContainer from './components/AppContainer/appContainer';
import PageContainer from './components/PageContainer/pageContainer';
import HeaderView from './components/Header/headerView';
import FooterView from './components/Footer/footerView';
//import RegistrationForm from "./pages/Registration/registrationForm";

const { body } = document;
const appContainer = new AppContainer();
const pageContainer = new PageContainer();
const header = new HeaderView();
const footer = new FooterView();

appContainer
  .getAppContainer()
  .append(
    header.getHeaderElement(),
    pageContainer.getPageContainer(),
    footer.getFooterElement(),
  );
body.append(appContainer.getAppContainer());

/*
if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}
*/
