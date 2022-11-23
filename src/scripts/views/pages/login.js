/* eslint-disable no-empty-function */
import '../../components/login-page';

const Login = {
  async render() {
    return `
            <login-page></login-page>
        `;
  },

  async afterRender() {
  },
};

export default Login;
