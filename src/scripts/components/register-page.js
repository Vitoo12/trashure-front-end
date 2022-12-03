class Register extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <div class="container-expand-lg">
                <div class="container-lg mt-5">
                  <h2 class="fw-bolder fs-1">Register</h2>
                  <p>Create an account here</p>
                </div>
                <div class="container-lg mt-4">
                  <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nama</label>
                        <input type="text" class="form-control" required>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" required>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" required>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">No Telp</label>
                        <input type="number" class="form-control" required>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">NIK</label>
                        <input type="number" class="form-control" required>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Alamat Pengepul</label>
                        <textarea type="text" class="form-control" required></textarea>
                      </div>
                      <div class="mt-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                        <label class="form-check-label" for="exampleCheck1">By Creating an account, you agree to our <b>Term and Conditions</b></label>
                      </div>
                      <div class="d-flex justify-content-center mt-5">
                          <button type="submit" class="w-50 text-light rounded-pill border-0" style="height:44px; background-color:#5DB932;">Register</button>
                      </div>
                  </form>
                </div>
                <div class="d-flex justify-content-center mt-3 mb-5">
                  <p>Already have an account? <a href="#/login" style="color:#5DB932">Login</a></p>
                </div>
              </div>
              `;
  }
}

customElements.define('register-page', Register);
