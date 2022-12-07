import Swal from 'sweetalert2';
import '../../components/change-password';
import UserDbSource from '../../data/userDbSource';
import UrlParser from '../../routes/url-parser';
import '../../components/loading/loading-page';

const ChangePassword = {
  async render() {
    return `
      <change-password></change-password>
      <loading-page class="d-none"></loading-page>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('loading-page');
    const backButton = document.querySelector('#backButton');

    backButton.addEventListener('click', () => {
      window.location.assign(`#/setting/${url.id}`);
    });

    const addLoading = () => {
      loading.classList.remove('d-none');
    };

    const removeLoading = () => {
      loading.classList.add('d-none');
    };

    const newPassword = document.querySelector('#newPassword');
    const confirmPassword = document.querySelector('#confirmPassword');
    const updateButton = document.querySelector('#updateButton');

    const updatePassword = async () => {
      if (window.navigator.onLine) {
        if (newPassword.value !== '' && confirmPassword.value !== '') {
          if (newPassword.value === confirmPassword.value) {
            const data = {
              password: newPassword.value,
            };
            addLoading();
            const response = await UserDbSource.updateUser(data, url.id);
            removeLoading();
            if (response.status === 200) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your password has been edited',
                showConfirmButton: false,
                timer: 2500,
              });
            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your password hasn\'t been edited',
                showConfirmButton: false,
                timer: 2500,
              });
            }
          } else {
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Your new password isn\'t same with confirm password',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        } else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Your new password can\'t empty',
            showConfirmButton: false,
            timer: 2500,
          });
        }
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Please check your internet',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    };

    updateButton.addEventListener('click', updatePassword);
  },
};

export default ChangePassword;
