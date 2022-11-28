import './skeleton/skeleton-tips';

class AnorganikPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <div class="container-expand-lg">
    <h1 class="text-center mt-4">Tips Anorganik</h1>
    <div class="container-expand-lg bg-success p-4 rounded-5 rounded-bottom">
      <div class="d-flex justify-content-center">
        <input type="text" class="rounded w-100 px-2" style="height:44px" placeholder="Search Tips">
      </div>
      <div class="container-expand-lg container-anorganik">
        <skeleton-tips class="row"></skeleton-tips>
      </div>
    </div>
              `;
  }
}

customElements.define('anorganik-page', AnorganikPage);
