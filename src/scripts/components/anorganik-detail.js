import './skeleton/skeleton-detail';

class AnorganikDetail extends HTMLElement {
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

customElements.define('anorganik-detail', AnorganikDetail);
