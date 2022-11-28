class AccountSetting extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                  <div class="container-expand-lg">
                    <div class="d-flex justify-content-center fw-bold p-3">
                      <h2>My Account</h2>
                    </div>
                    <div class="container-lg mt-2 mb-5">
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Nama</label>
                          <input type="text" class="form-control" placeholder="Spongebob Squarepants">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">No Telp</label>
                          <input type="number" class="form-control">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">NIK</label>
                          <input type="number" class="form-control">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Alamat Pengepul</label>
                          <textarea type="text" class="form-control"></textarea>
                        </div>
                        <div class="mb-3 d-flex justify-content-center" >
                          <button type="submit" class="btn btn-success w-50 rounded-4" style="height:44px;">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  `;
  }
}

customElements.define('account-setting', AccountSetting);
