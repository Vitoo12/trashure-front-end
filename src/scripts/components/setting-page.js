class Setting extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="container-expand-lg pb-5">
                  <div class="container-lg bg-success d-flex flex-column justify-content-center rounded-5 rounded-top" style="height:230px">
                    <h2 class="text-center text-light">Setting</h2>
                    <div class="d-flex flex-row justify-content-center mt-3">
                        <img class="bg-light rounded-circle" style="width:80px; height:80px;">
                        <div class="px-3 pt-3">
                            <h5 class="text-light">Spongebob Squarepants</h5>
                            <p class="text-light">+6281122334455</p>
                        </div>
                    </div>
                  </div>
                  <div class="container-lg pt-3">
                    <div class="d-flex w-100 bg-secondary rounded-pill align-items-center" style="height:50px">
                        <i class="bi bi-person-circle fs-2 ps-3 text-light"></i>
                        <a href="#/setting/:id/account" class="text-light text-decoration-none fw-bold fs-5 p-3">My Account</a>
                    </div>
                    <div class="d-flex w-100 bg-secondary rounded-pill align-items-center  my-3" style="height:50px">
                        <i class="bi bi-box-arrow-left fs-2 ps-3 text-light"></i>
                        <a href="#/" class="text-light text-decoration-none fw-bold fs-5 p-3">Logout</a>
                    </div>
                  </div>
                </div>
                `;
  }
}

customElements.define('setting-page', Setting);
