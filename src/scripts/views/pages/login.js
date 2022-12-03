/* eslint-disable import/no-cycle */

import '../../components/login-page';
// import routes from '../../routes/routes';

const Login = {
  async render() {
    return `
            <login-page></login-page>
        `;
  },

  async afterRender() {
    const addSetting = () => {
      const settingNav = document.querySelector('#settingNav');
      settingNav.classList.remove('d-none');
    };

    const removeLoginRegisterNav = () => {
      const loginNav = document.querySelector('#loginNav');
      const registerNav = document.querySelector('#registerNav');
      loginNav.classList.add('d-none');
      registerNav.classList.add('d-none');
    };

    const emailInput = document.querySelector('#emailLogin');
    const passwordInput = document.querySelector('#passwordLogin');
    const buttonLogin = document.querySelector('#buttonLogin');
    const main = document.querySelector('main');

    const correctInput = async () => {
      if (emailInput.value === 'atokemen12@gmail.com' && passwordInput.value === '123456') {
        main.innerHTML += `
        <div class="alert alert-success d-flex align-items-center position-absolute top-50 start-50 translate-middle w-75 h-25" role="alert">
        <i class="bi bi-check2-all mx-3 fs-3"></i>
        <div>
          An example success alert with an icon
        </div>
        <div>
          <a href="#/" class="btn btn-success text-light text-decoration-none">OK</a>
        </div>
      </div>`;

        removeLoginRegisterNav();
        addSetting();
      }
    };

    buttonLogin.addEventListener('click', correctInput);
  },
};

export default Login;
