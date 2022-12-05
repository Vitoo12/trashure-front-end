class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-expand-lg p-3 text-center text-light">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h2 tabindex="0">Trashure</h2>
            </div>
            <div class="col-md-4">
              <h2 tabindex="0">Our Partner</h2>
              <ul class="list-unstyled">
                <li><a href="https://www.dicoding.com" class="text-decoration-none text-light">Dicoding</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h2 tabindex="0">Our About</h2>
              <ul class="list-unstyled">
                <li><a href="https://www.linkedin.com/in/alfianvitoanggoro/" class="text-decoration-none text-light">Alfian Vito Anggoro</a></li>
                <li><a href="https://www.linkedin.com/in/alfianvitoanggoro/" class="text-decoration-none text-light">Shufyan</a></li>
                <li><a href="https://www.linkedin.com/in/alfianvitoanggoro/" class="text-decoration-none text-light">Alifia</a></li>
                <li><a href="https://www.linkedin.com/in/alfianvitoanggoro/" class="text-decoration-none text-light">Fadhil</a></li>
              </ul>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('foot-bar', FootBar);
