import Swal from 'sweetalert2';
import LocalStorageSource from '../../data/localStorageSource';
import '../../components/setting-page';
import UserDbSource from '../../data/userDbSource';
import UrlParser from '../../routes/url-parser';

const Setting = {
  async render() {
    return `
            <setting-page></-page>
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

    addSkeleton();
    const user = await UserDbSource.detailUser(url.id);
    if (user) {
      containerSetting.innerHTML += `
                        <div class="px-3 pt-3">
                            <h5 class="text-light">${user.name}</h5>
                            <p class="text-light">${user.number}</p>
                        </div>
                        `;
    } else {
      containerSetting.innerHTML += `
                        <div class="px-3 pt-3">
                            <h5 class="text-light">Name is Invalid</h5>
                            <p class="text-light">Number is Invalid</p>
                        </div>
                        `;
    }
    removeSkeleton();

    const myaccountButton = document.querySelector('#myaccountButton');

    myaccountButton.addEventListener('click', () => {
      const idUser = LocalStorageSource.getUserFromLocalStorage();
      if (idUser) {
        window.location.assign(`#/setting/${idUser || '-'}/account`);
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
          window.location.assign('#/');
          LocalStorageSource.deleteUserFromLocalStorage();
          settingNav.classList.add('d-none');
          loginNav.classList.remove('d-none');
          registerNav.classList.remove('d-none');
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout has succed',
            showConfirmButton: false,
            timer: 1500,
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
