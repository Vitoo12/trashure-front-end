/* eslint-disable no-empty-function */
import '../../components/home-page';

const Home = {
  async render() {
    return `
            <home-page></home-page>

        `;
  },

  async afterRender() {
  },
};

export default Home;
