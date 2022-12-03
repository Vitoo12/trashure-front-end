class ChangePassword extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-expand-lg">
          <div class="d-flex justify-content-center align-items-center flex-column fw-bold p-3">
            <h2>Change Password</h2>
            <img src="./images/lock-icon.jpg" alt="lock-icon" class="my-3" />
            <p class="text-wrap text-center">Your New Password  Must Be Different from Previously Used Password.</p>
          </div>
          <div class="container-lg mt-2 mb-5">
            <form>
              <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" class="form-control bg-light" id="newPassword"/>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm New Password</label>
                <input type="password" class="form-control bg-light" id="confirmPassword"/>
              </div>
              <div class="mb-3 d-flex justify-content-center">
                <button type="submit" class="btn btn-success w-50 rounded-4" style="height:44px;" id="updateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define('change-password', ChangePassword);
