import './skeleton/skeleton-detail';

class OrganikDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
        <div class="container-lg">
          <skeleton-detail></skeleton-detail>
        </div>
                  `;
  }
}

customElements.define('organik-detail', OrganikDetail);
