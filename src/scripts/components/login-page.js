class Login extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container-expand-lg">
              <div class="container-lg mt-5">
                <h2 class="fw-bolder fs-1">Login</h2>
                <p>Please log in to your account</p>
              </div>
              <div class="container-lg mt-4">
                <form>
                    <div>
                        <label>E-mail</label>
                        <br>
                        <input type="text" class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Your email">
                    </div>
                    <div class="mt-3">
                        <label>Password</label>
                        <br>
                        <input class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Password" type="password">
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <button type="submit" class="w-50 text-light rounded-pill border-0" style="height:44px; background-color:#5DB932;">Login</button>
                    </div>
                </form>
              </div>
              <div class="d-flex justify-content-center mt-3 mb-5">
                <p>Don't have an account? <a href="#/register" class="" style="color:#5DB932;">Sign Up</a></p>
              </div>
            </div>
            `;
  }
}

customElements.define('login-page', Login);
