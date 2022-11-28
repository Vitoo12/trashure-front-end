/* eslint-disable no-empty-function */
import '../../components/list-pengepul';

const ListPengepul = {
  async render() {
    return `
            <list-pengepul></list-pengepul>
        `;
  },

  async afterRender() {
    const skeleton = document.querySelector('skeleton-list');
    const removeSkeleton = () => {
      skeleton.classList.add('d-none');
    };

    const addSkeleton = () => {
      skeleton.classList.remove('d-none');
    };

    removeSkeleton();
    addSkeleton();
  },
};

export default ListPengepul;
