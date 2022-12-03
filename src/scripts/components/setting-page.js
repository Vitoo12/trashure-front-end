class Setting extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="container-expand-lg pb-5">
                  <div class="container-lg bg-success d-flex flex-column justify-content-center rounded-5 rounded-top" style="height:230px">
                    <h2 class="text-center text-light">Setting</h2>
                    <div class="d-flex flex-row justify-content-center mt-3" id="containerSetting">
                        <img class="bg-light rounded-circle" style="width:80px; height:80px;">
                        <p class="placeholder-glow" id="skeletonSetting">
                          <span class="placeholder col-6"></span>
                          <span class="placeholder col-6"></span>
                        </p>
                    </div>
                  </div>
                  <div class="container-lg pt-3">
                    <div class="d-flex align-items-center" style="height:50px">
                      <button class="btn btn-transparent text-light w-100 bg-secondary rounded-pill" id="myaccountButton"><i class="bi bi-person-fill fs-2 ps-3"></i><span class="fs-3 ms-3">My Account</span></button>
                    </div>
                    <div class="d-flex align-items-center my-3" style="height:50px">
                      <button class="btn btn-transparent text-light w-100 bg-secondary rounded-pill" id="logoutButton"><i class="bi bi-box-arrow-left fs-2 ps-3"></i><span class="fs-3 ms-3">Logout</span></button>
                    </div>
                  </div>
                </div>
                `;
  }
}

customElements.define('setting-page', Setting);
