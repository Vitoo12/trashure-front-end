import '../../components/anorganik-page';

const Anorganik = {
  async render() {
    return `
            <anorganik-page></anorganik-page>
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

export default Anorganik;
