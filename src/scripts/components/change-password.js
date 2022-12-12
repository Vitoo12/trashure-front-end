class ChangePassword extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-expand-lg">
          <div class="container-lg pt-3">
            <button id="backButton" class="bg-transparent border-0" aria-label="back button"><i class="bi bi-arrow-left" style="font-size:44px"></i></button>
          </div>
          <div class="d-flex justify-content-center align-items-center flex-column fw-bold p-3">
            <h2 tabindex="0">Change Password</h2>
            <picture class="my-3">
              <source type="image/jpeg" srcset="./images/lock-icon.jpg" style="height:200px; width:200px;" alt="lock image">
              <img src='./images/lock-icon.webp' alt="lock image" style="height:200px; width:200px;">
            </picture>
            <p class="text-wrap text-center" tabindex="0">Your New Password  Must Be Different from Previously Used Password.</p>
          </div>
          <div class="container-lg mt-2 mb-5">
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
          </div>
        </div>
      `;
  }
}

customElements.define('change-password', ChangePassword);
