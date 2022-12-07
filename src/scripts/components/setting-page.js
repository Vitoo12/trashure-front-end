class Setting extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="container-expand-lg pb-5">
                  <div class="container-lg bg-success d-flex flex-column justify-content-center rounded-5 rounded-top" style="height:230px">
                    <h2 class="text-center text-light" tabindex="0">Setting</h2>
                    <div class="d-flex flex-row justify-content-center mt-3" id="containerSetting">
                        <div class="bg-secondary rounded-circle" style="width:80px; height:80px;"></div>
                        <p class="placeholder-glow d-flex flex-column ms-3" id="skeletonSetting">
                          <span class="placeholder my-2" style="width:250px"></span>
                          <span class="placeholder" style="width:200px"></span>
                        </p>
                    </div>
                  </div>
                  <div class="container-lg pt-3">
                    <div class="d-flex align-items-center" style="height:50px">
                      <button class="btn btn-transparent text-light w-100 bg-secondary rounded-pill bgHover" id="myaccountButton"><i class="bi bi-person-fill fs-2 ps-3"></i><span class="fs-3 ms-3">My Account</span></button>
                    </div>
                    <div class="d-flex align-items-center my-4" style="height:50px">
                      <button class="btn btn-transparent text-light w-100 bg-secondary rounded-pill bgHover" id="changePassword"><i class="bi bi-key-fill fs-2 ps-3"></i><span class="fs-3 ms-3">Change Passsword</span></button>
                    </div>
                    <div class="d-flex align-items-center my-3" style="height:50px">
                      <button class="btn btn-transparent text-light w-100 bg-secondary rounded-pill bgHover" id="logoutButton"><i class="bi bi-box-arrow-left fs-2 ps-3"></i><span class="fs-3 ms-3">Logout</span></button>
                    </div>
                  </div>
                </div>
                `;
  }
}

customElements.define('setting-page', Setting);
