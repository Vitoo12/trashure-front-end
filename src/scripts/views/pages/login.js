import '../../components/login-page';
import Swal from 'sweetalert2';
import UserDbSource from '../../data/userDbSource';
import localStorageSource from '../../data/localStorageSource';
import '../../components/loading/loading-page';

const Login = {
  async render() {
    return `
            <login-page></login-page>
            <loading-page class="d-none"></loading-page>
        `;
  },

  async afterRender() {
    const loading = document.querySelector('loading-page');

    const addLoading = () => {
      loading.classList.remove('d-none');
    };

    const removeLoading = () => {
      loading.classList.add('d-none');
    };

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

    const buttonLogin = document.querySelector('#buttonLogin');

    const correctInput = async () => {
      if (window.navigator.onLine) {
        const emailInput = document.querySelector('#emailLogin');
        const passwordInput = document.querySelector('#passwordLogin');
        if (emailInput.value !== '' && passwordInput.value !== '') {
          const user = {
            email: emailInput.value,
            password: passwordInput.value,
          };
          addLoading();
          const data = await UserDbSource.loginUser(user);
          removeLoading();
          if (data) {
            localStorageSource.setUserToLocalStorage(data.id);
            window.location.assign('#/');
            removeLoginRegisterNav();
            addSetting();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login success',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Your email or password false',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Please input your email or password',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Please check your internet',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

    buttonLogin.addEventListener('click', correctInput);
  },
};

export default Login;
