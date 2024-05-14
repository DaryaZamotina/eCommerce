import HeaderView from './components/Header/headerView';
import TagCreator from './module/tagCreator';
import HomePage from './pages/Home/homePage';
import RegistrationForm from './pages/Registration/registrationForm';
// import Router from "./router/router";

// у этого контейнера appContainer будет max-width: 1920px
const appContainerTagCreator = new TagCreator(
  'div',
  'app-container',
  'appContainer',
  'body',
);

// целью было - добавить в контейнер appContainer header и pageContainer, чтобы разные страницы менялись в pageContainer, а header оставалась на месте
const appContainer = appContainerTagCreator.createAndReturn();
// по стилям header пока не поняла, как стили подключить
const header = new HeaderView();
appContainer.append(header.getHeaderElement());
document.body.append(appContainer);

const pageContainerTagCreator = new TagCreator(
  'div',
  'page-container',
  'pageContainer',
  'appContainer',
);
export const pageContainer = pageContainerTagCreator.createAndReturn();
appContainer.append(pageContainer);

const homePage = new HomePage();
appContainer.append(homePage.getSection());

if (localStorage.getItem('isLogined') === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}

// После загрузки страницы надо будет включить роутер, но маршрутизация не работает

// window.addEventListener('DOMContentLoaded', () => {
//   const router = new Router();
//   console.log(router);
//   router.route();
// })
