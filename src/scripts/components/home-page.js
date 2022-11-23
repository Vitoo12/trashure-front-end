class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="container-expand-lg">
            <div class="container-expand-lg bg-black" style='height:500px'>
              <img src="..." class="img-fluid bg-black" alt="...">
            </div>
            <div class='container-expand-lg'>
              <div class="container-lg mt-4 py-3">
                <h2>What is Trashure (?)</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque orci eu nunc molestie elit. Ipsum eu feugiat et orci congue. Ridiculus faucibus.</p>
              </div>
              <div class="container-lg py-3 bg-warning">
                <h2>Tujuan dan Misi (!)</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque orci eu nunc molestie elit. Ipsum eu feugiat et orci congue. Ridiculus faucibus.</p>
              </div>
              <div class="container-lg mb-4 py-3">
                <h2>Solusi Kami (*)</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque orci eu nunc molestie elit. Ipsum eu feugiat et orci congue. Ridiculus faucibus.</p>
              </div>
            </div>
          </div>
          `;
  }
}

customElements.define('home-page', HomePage);
