/* eslint-disable no-empty-function */
import '../../components/organik-page';

const Organik = {
  async render() {
    return `
            <organik-page></organik-page>
        `;
  },

  async afterRender() {
    const skeleton = document.querySelector('skeleton-tips');
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

export default Organik;
