class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-expand-lg p-3 text-center text-light">
          <div class="row">
            <div class="col">
              <h2 text-success>Trashure</h2>
            </div>
            <div class="col">
              <h2>Our Partner</h2>
              <ul class="list-unstyled">
                <li><a href="https://www.dicoding.com" class="text-decoration-none">Dicoding</a></li>
              </ul>
            </div>
            <div class="col">
              <h2>Our About</h2>
              <ul class="list-unstyled">
                <li><a href="https://www.linkedin.com/in/alfianvitoanggoro/" class="text-decoration-none">Alfian Vito Anggoro</a></li>
              </ul>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('foot-bar', FootBar);
