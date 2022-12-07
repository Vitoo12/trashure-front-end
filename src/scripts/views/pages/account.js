import Swal from 'sweetalert2';
import '../../components/account-setting';
import UserDbSource from '../../data/userDbSource';
import UrlParser from '../../routes/url-parser';
import '../../components/loading/loading-page';

const AccountSetting = {
  async render() {
    return `
            <account-setting></account-setting>
            <loading-page></loading-page>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const namaAccount = document.querySelector('#namaAccount');
    const emailAccount = document.querySelector('#emailAccount');
    const numberAccount = document.querySelector('#numberAccount');
    const nikAccount = document.querySelector('#nikAccount');
    const alamatAccount = document.querySelector('#alamatAccount');
    const loading = document.querySelector('loading-page');
    const backButton = document.querySelector('#backButton');

    backButton.addEventListener('click', () => {
      window.location.assign(`#/setting/${url.id}`);
    });

    const removeLoading = () => {
      loading.classList.add('d-none');
    };

    const addLoading = () => {
      loading.classList.remove('d-none');
    };

    const saveButton = document.querySelector('#saveButton');

    const user = await UserDbSource.detailUser(url.id);
    if (user) {
      namaAccount.value = `${user.name}`;
      emailAccount.value = `${user.email}`;
      numberAccount.value = `${user.number}`;
      nikAccount.value = `${user.nik}`;
      alamatAccount.value = `${user.alamat}`;
      removeLoading();
    }

    const saveEdit = async () => {
      if (window.navigator.onLine) {
        if (namaAccount.value !== '' && emailAccount.value !== '' && numberAccount.value !== '' && nikAccount.value !== '' && alamatAccount.value !== '') {
          const data = {
            name: namaAccount.value,
            email: emailAccount.value,
            number: numberAccount.value,
            nik: nikAccount.value,
            alamat: alamatAccount.value,
          };
          addLoading();
          const updateUser = await UserDbSource.updateUser(data, url.id);
          removeLoading();
          if (updateUser.status === 200) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edit data has success',
              showConfirmButton: false,
              timer: 2500,
            });
          } else {
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Your (email, number, nik) has been used',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        } else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Data user can\'t empty',
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

    saveButton.addEventListener('click', saveEdit);
  },
};

export default AccountSetting;
