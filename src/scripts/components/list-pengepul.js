/* eslint-disable no-empty-function */
import './skeleton/skeleton-list';

class ListPengepul extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
            <div class="container-expand-lg">
              <h1 class="text-center mt-4">List Pengepul</h1>
              <div class="container-expand-lg bg-success p-4 rounded-5 rounded-bottom">
                <div class="d-flex justify-content-center">
                  <input type="text" class="rounded w-100 px-2" style="height:44px" placeholder="Search Pengepul">
                </div>
                <div class="d-flex flex-column justify-content-center mt-4">
                  <skeleton-list></skeleton-list>
                </div>
              </div>
            </div>
            `;
  }
}

customElements.define('list-pengepul', ListPengepul);
