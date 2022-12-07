class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-expand-lg p-3 text-center text-light" style="min-height:200px">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h2 tabindex="0" class="text-warning">Trashure</h2>
            </div>
            <div class="col-md-4">
              <h2 tabindex="0" class="text-warning">Our Support</h2>
              <ul class="list-unstyled">
                <li><a href="https://www.dicoding.com" class="text-decoration-none text-light greenHover" target="_blank" >Dicoding</a></li>
                <li><a href="https://kampusmerdeka.kemdikbud.go.id/" class="text-decoration-none text-light greenHover" target="_blank" >Kampus Merdeka</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h2 tabindex="0" class="text-warning">Our About</h2>
              <ul class="list-unstyled">
                <li><a href="https://www.linkedin.com/in/alfianvitoanggoro/" target="_blank" class="text-decoration-none text-light greenHover">Alfian Vito Anggoro</a></li>
                <li><a href="https://www.linkedin.com/in/ahmad-shufyan-319639200/" target="_blank" class="text-decoration-none text-light greenHover">Ahmad Shufyan</a></li>
                <li><a href="https://www.linkedin.com/in/alifia-putri-qabila-889635218" target="_blank" class="text-decoration-none text-light greenHover">Alifia Putri Qabila</a></li>
                <li><a href="https://www.linkedin.com/in/fadhillah-ramadhan-aa208521a/" target="_blank" class="text-decoration-none text-light greenHover">Fadhil Ramadhan</a></li>
              </ul>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('foot-bar', FootBar);
