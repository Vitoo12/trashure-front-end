/* eslint-disable no-console */
// import LocalStorageSource from '../data/localStorageSource';

import LocalStorageSource from '../data/localStorageSource';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color:#5DB932">
          <div class="container-xl">
            <a class="navbar-brand fw-bold fs-4" href="#/"><img src="./favicon.png" style="width:44px; height:44px;"> Trashure</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
                <li class="nav-item m-2">
                  <a class="nav-link active" aria-current="page" href="#/list">List-Pengepul</a>
                </li>
                <li class="nav-item dropdown m-2">
                  <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tips
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#/organik">Organik</a></li>
                    <li><a class="dropdown-item" href="#/anorganik">Anorganik</a></li>
                  </ul>
                </li>
                <li class="nav-item m-2 d-none" id="settingNav">
                  <button class="p-0 text-center bg-transparent border-0 text-white" aria-current="page" id="settingButton" aria-label="Setting Account"><i class="bi bi-person-circle fs-2"></i></button>
                </li>
                <li class="nav-item m-2" id="loginNav">
                  <a class="nav-link btn btn-success text-warning" href="#/login">Login</a>
                </li>
                <li class="nav-item m-2" id="registerNav">
                  <a class="nav-link btn btn-warning text-success" href="#/register">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;

    const settingButton = this.querySelector('#settingButton');

    settingButton.addEventListener('click', () => {
      const idUser = LocalStorageSource.getUserFromLocalStorage();
      if (idUser) {
        window.location.assign(`#/setting/${idUser || '-'}`);
      }
    });
  }
}

customElements.define('nav-bar', NavBar);
