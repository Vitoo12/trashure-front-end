class AccountSetting extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                  <div class="container-expand-lg">
                    <div class="d-flex justify-content-center fw-bold p-3">
                      <h2 tabindex="0">My Account</h2>
                    </div>
                    <div class="container-lg mt-2 mb-5">
                      <form>
                        <div class="mb-3">
                          <label for="namaAccount" class="form-label">Nama</label>
                          <input type="text" class="form-control" id="namaAccount">
                        </div>
                        <div class="mb-3">
                          <label for="emailAccount" class="form-label">Email address</label>
                          <input type="email" class="form-control" aria-describedby="emailHelp" id="emailAccount">
                        </div>
                        <div class="mb-3">
                          <label for="numberAccount" class="form-label">No Telp</label>
                          <input type="number" class="form-control" id="numberAccount">
                        </div>
                        <div class="mb-3">
                          <label for="nikAccount" class="form-label">NIK</label>
                          <input type="number" class="form-control" id="nikAccount">
                        </div>
                        <div class="mb-3">
                          <label for="alamatAccount" class="form-label">Alamat Pengepul</label>
                          <textarea type="text" class="form-control" id="alamatAccount"></textarea>
                        </div>
                        <div class="mb-3 d-flex justify-content-center" >
                          <button type="submit" class="btn btn-success w-50 rounded-4" style="height:44px;" id="saveButton">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  `;
  }
}

customElements.define('account-setting', AccountSetting);
