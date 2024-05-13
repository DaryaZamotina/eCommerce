/* // ---Раскомментируйте / * * / первую и последнюю строчку файла

import { pageContainer } from "..";
// import TagCreator from "../module/tagCreator";
// import RegistrationForm from "../pages/Registration/registrationForm";
import HomePage from "../pages/Home/homePage";
import TagCreator from "../module/tagCreator";

// Создаю единственный экземпляр класса HomePage
const homePage = new HomePage();

// Создаю тестовую страницу регистрации, так как имеющийся способ прорисовки страницы регистрации выдавал ошибку 'null' вот в этом месте из TagCreator document.getElementById(`${this.childId}`)!.appendChild(tag); 
const registrationFormContainerTagCreator = new TagCreator(
  "section",
  "registration-form-container",
  "registrationFormContainer",
  "pageContainer",
  "reg form page test"
);
export const registrationFormContainer = registrationFormContainerTagCreator.createAndReturn();

// Закомментировала имеющийся ранее способ прорисовки формы регистрации
// if (localStorage.getItem("isLogined") === null) {
//   const registrationFormDiv = new RegistrationForm();
//   registrationFormDiv.createRegistrationForm();
// }
// const registrationFormDiv = new RegistrationForm();
// registrationFormDiv.createRegistrationForm();

// Создаю HTMLElement - тестовую страницу логина
const loginFormContainerTagCreator = new TagCreator(
  "section",
  "login-form-container",
  "loginFormContainer",
  "pageContainer",
  "login form page test"
);
const loginFormContainer = loginFormContainerTagCreator.createAndReturn();

// Создаю контейнер - страница не найдена
const page404ContainerTagCreator = new TagCreator(
  "section",
  "login-form-container",
  "loginFormContainer",
  "pageContainer",
  "Error 404! Page Not Found"
);
export const page404Container = page404ContainerTagCreator.createAndReturn();

// не получается привязать новые url к приложению
export default class Router {
  private routes: {[key: string]: HTMLElement};

  private pageContainer: HTMLElement;

  constructor() {
    this.pageContainer = pageContainer;
    this.routes = {
      "/public/": homePage.getSection(),
      "/public/home": homePage.getSection(),
      "/public/registration": registrationFormContainer,
      "/public/login": loginFormContainer,
      // "/**": page404Container
    };

    window.addEventListener("popstate", this.route.bind(this));
  }

  route() {
    const { pathname } = window.location;
    console.log(pathname);
    const component = this.routes[pathname];

    if (!component) {
      alert(`page with address http://...${pathname} does not exist`);
      return this.onNavigate("/");
    }

    this.pageContainer.innerHTML = '';
    this.pageContainer.append(component);
  }

  onNavigate(pathname: string) {
    window.history.pushState(null, null, pathname);
    this.route();
  }
}
// */