import Swal from 'sweetalert2';
import '../../components/setting-page';
import UserDbSource from '../../data/userDbSource';
import UrlParser from '../../routes/url-parser';
import '../../components/loading/loading-page';
import LocalStorageSource from '../../data/localStorageSource';

const Setting = {
  async render() {
    return `
            <setting-page></setting-page>
            <loading-page></loading-page>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const containerSetting = document.querySelector('#containerSetting');
    const skeletonSetting = document.querySelector('#skeletonSetting');

    const removeSkeleton = () => {
      skeletonSetting.classList.add('d-none');
    };

    const addSkeleton = () => {
      skeletonSetting.classList.remove('d-none');
    };

    const loading = document.querySelector('loading-page');

    const removeLoading = () => {
      loading.classList.add('d-none');
    };

    addSkeleton();
    const user = await UserDbSource.detailUser(url.id);
    if (user) {
      containerSetting.innerHTML = `
                        <picture class="rounded-circle">
                          <source type="image/jpeg" srcset="./images/profile-pic.jpg" style="height:80px; width:80px;" alt="profile image">
                          <img src='./images/profile-pic.webp' alt="profile image" style="height:80px; width:80px;">
                        </picture>
                        <div class="px-3 pt-3">
                            <h5 class="text-light" tabindex="0">${user.name}</h5>
                            <p class="text-light" tabindex="0">${user.number}</p>
                        </div>
                        `;
    } else {
      containerSetting.innerHTML = `
                        <div class="bg-secondary rounded-circle" style="width:80px; height:80px;"></div>
                        <div class="px-3 pt-3">
                            <h5 class="text-light">Name is Invalid</h5>
                            <p class="text-light">Number is Invalid</p>
                        </div>
                        `;
    }
    removeSkeleton();
    removeLoading();

    const myaccountButton = document.querySelector('#myaccountButton');

    myaccountButton.addEventListener('click', () => {
      const idUser = LocalStorageSource.getUserFromLocalStorage();
      if (idUser) {
        window.location.assign(`#/setting/${idUser}/account`);
      }
    });

    const changePassword = document.querySelector('#changePassword');

    changePassword.addEventListener('click', () => {
      const idUser = LocalStorageSource.getUserFromLocalStorage();
      if (idUser) {
        window.location.assign(`#/setting/${idUser}/password`);
      }
    });

    const logoutButton = document.querySelector('#logoutButton');
    const loginNav = document.querySelector('#loginNav');
    const registerNav = document.querySelector('#registerNav');
    const settingNav = document.querySelector('#settingNav');

    logoutButton.addEventListener('click', () => {
      if (window.navigator.onLine) {
        const idUser = LocalStorageSource.getUserFromLocalStorage();
        if (idUser) {
          Swal.fire({
            title: 'Are you sure?',
            text: `You want to logout from account ${user.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Logout has succed',
                showConfirmButton: false,
                timer: 2500,
              });
              window.location.assign('#/');
              LocalStorageSource.deleteUserFromLocalStorage();
              settingNav.classList.add('d-none');
              loginNav.classList.remove('d-none');
              registerNav.classList.remove('d-none');
            }
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your data is no valid',
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
    });
  },
};

export default Setting;
