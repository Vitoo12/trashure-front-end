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
                      <div>
                          <input type="text" class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Your name" required>
                      </div>
                      <div class="mt-3">
                          <input class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Password" type="password" required>
                      </div>
                      <div class="mt-3">
                          <input type="email" class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Email" required>
                      </div>
                      <div class="mt-3">
                          <input type="number" class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Phone number" required>
                      </div>
                      <div class="mt-3">
                          <input type="number" class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="NIK" required>
                      </div>
                      <div class="mt-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
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
