import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.css';
import './components/nav-bar';
import './components/foot-bar';
import App from './views/app';
import LocalStorageSource from './data/localStorageSource';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  const localStorage = LocalStorageSource.getUserFromLocalStorage();
  if (localStorage) {
    const loginNav = document.querySelector('#loginNav');
    const registerNav = document.querySelector('#registerNav');
    const settingNav = document.querySelector('#settingNav');
    settingNav.classList.remove('d-none');
    loginNav.classList.add('d-none');
    registerNav.classList.add('d-none');
  }
  app.renderPage();
});
