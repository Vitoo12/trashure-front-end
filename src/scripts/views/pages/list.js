import '../../components/list-pengepul';
import UserDbSource from '../../data/userDbSource';
import { createPengepulListItemTemplate } from '../templates/template-creator';

const ListPengepul = {
  async render() {
    return `
            <list-pengepul></list-pengepul>
        `;
  },

  async afterRender() {
    const containerCardList = document.querySelector('#containerCardTips');
    const skeleton = document.querySelector('skeleton-list');

    const removeSkeleton = () => {
      skeleton.classList.add('d-none');
    };

    const addSkeleton = () => {
      skeleton.classList.remove('d-none');
    };

    addSkeleton();
    const users = await UserDbSource.getAllUser();
    removeSkeleton();
    if (users) {
      users.forEach((user) => {
        containerCardList.innerHTML += createPengepulListItemTemplate(user);
      });
    } else {
      containerCardList.innerHTML += '<h3>FAILED LOAD DATA</h3>';
    }

    const searchInput = document.querySelector('#searchInput');

    searchInput.addEventListener('change', (event) => {
      const searchValue = event.target.value.toLowerCase();
      const userFilter = users.filter((user) => user.alamat.toLowerCase().includes(searchValue));
      if (userFilter.length > 0) {
        containerCardList.innerHTML = '';
        userFilter.forEach((user) => {
          containerCardList.innerHTML += createPengepulListItemTemplate(user);
        });
      } else {
        containerCardList.innerHTML = '<h2 class="text-warning fs-2">Alamat tidak ada yang cocok !!!</h2>';
      }
    });
  },
};

export default ListPengepul;
