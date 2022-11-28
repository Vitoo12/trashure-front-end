import './skeleton/skeleton-tips';

class OrganikPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
                <div class="container-expand-lg">
                  <h1 class="text-center mt-4">Tips Organik</h1>
                  <div class="container-expand-lg bg-success p-4 rounded-5 rounded-bottom">
                    <div class="d-flex justify-content-center">
                      <input type="text" class="rounded w-100 px-2" style="height:44px" placeholder="Search Tips">
                    </div>
                    <div class="container-expand-lg container-organik">
                      <skeleton-tips class="row"></skeleton-tips>
                    </div>
                  </div>
                </div>
                `;
  }
}

customElements.define('organik-page', OrganikPage);
