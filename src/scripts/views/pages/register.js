/* eslint-disable no-console */
import '../../components/register-page';
import Swal from 'sweetalert2';
import UserDbSource from '../../data/userDbSource';

const Register = {
  async render() {
    return `
            <register-page></-page>
        `;
  },

  async afterRender() {
    const registerButton = document.querySelector('#registerButton');

    const addUser = async () => {
      if (window.navigator.onLine) {
        const namaInput = document.querySelector('#namaInput').value;
        const emailInput = document.querySelector('#emailInput').value;
        const passwordInput = document.querySelector('#passwordInput').value;
        const notelpInput = document.querySelector('#notelpInput').value;
        const nikInput = document.querySelector('#nikInput').value;
        const alamatInput = document.querySelector('#alamatInput').value;
        const checkInput = document.querySelector('#checkInput').value;
        if (namaInput !== '' && emailInput !== '' && passwordInput !== '' && notelpInput !== '' && nikInput !== '' && alamatInput !== '' && checkInput !== 'off') {
          const user = {
            name: namaInput,
            password: passwordInput,
            email: emailInput,
            number: notelpInput,
            nik: nikInput,
            alamat: alamatInput,
          };
          await UserDbSource.registerUser(user);
          window.location.assign('#/login');
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Register has been succed',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Please input all data',
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
    };

    registerButton.addEventListener('click', addUser);
  },
};

export default Register;
