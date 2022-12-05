class Login extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container-expand-lg">
              <div class="container-lg mt-5">
                <h2 class="fw-bolder fs-1" tabindex="0">Login</h2>
                <p tabindex="0">Please log in to your account <b>as pengepul</b></p>
              </div>
              <div class="container-lg mt-4">
                <form>
                    <div>
                        <label>E-mail</label>
                        <br>
                        <input type="text" class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Your email" id="emailLogin" required>
                    </div>
                    <div class="mt-3">
                        <label>Password</label>
                        <br>
                        <input class="w-100 ps-3 rounded-2" style="height:44px;" placeholder="Password" type="password" id="passwordLogin" required>
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <button type="submit" class="w-50 text-light rounded-pill border-0" style="height:44px; background-color:#5DB932;" id="buttonLogin">Login</button>
                    </div>
                </form>
              </div>
              <div class="d-flex justify-content-center mt-3 mb-5">
                <p tabindex="0">Don't have an account? <a href="#/register" class="" style="color:#5DB932;">Sign Up</a></p>
              </div>
            </div>
            `;
  }
}

customElements.define('login-page', Login);
