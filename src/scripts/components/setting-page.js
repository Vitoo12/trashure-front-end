class Setting extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="settings-title px-4 pt-3 pb-4">
        <h2 class="text-center">Setting</h2>
        <div class="d-flex gap-3">
          <img src="./images/profile-pic.svg" alt="profile-pic" />
          <div
            class="d-flex flex-column justify-content-center text-nowrap overflow-hidden text-white fs-7"
          >
            <p>Uvuvwevwevwe Onyetenvewve Ugwemubwem Ossas</p>
            <p>+62 81122334455</p>
          </div>
        </div>
      </div>
      <div class="container py-3">
        <a
          href="${window.location.hash + "/account"}"
          class="d-flex justify-content-between align-items-center my-4 btn btn-light"
        >
          <div class="d-flex">
            <img
              src="./images/profile-logo.svg"
              alt="profile-logo"
              class="me-2 align-items-center ratio ratio-1x1"
              style="width: 40px;"
            />
            <span class="fs-3">My Account</span>
          </div>
          <img src="./images/arrow-right.svg" alt="arrow-right" />
        </a>

        <a
          href="#"
          class="d-flex justify-content-between align-items-center my-4 btn btn-light"
        >
          <div class="d-flex">
            <img
              src="./images/logout-logo.svg"
              alt="profile-logo"
              class="me-2 align-items-center ratio ratio-1x1"
              style="width: 40px;"
            />
            <span class="fs-3">Logout</span>
          </div>
          <img src="./images/arrow-right.svg" alt="arrow-right" />
        </a>
      </div>
    `;
  }
}

customElements.define("setting-page", Setting);
