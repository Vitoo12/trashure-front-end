/* eslint-disable no-empty-function */
class ListPengepul extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <div class="container-expand-lg">
        <h1 class="text-center mt-4">List Pengepul</h1>
        <div class="list-pengepul container-expand-lg p-4 rounded-5">
          <div class="d-flex justify-content-center">
            <input
              type="text"
              class="rounded w-100 px-2 form-control"
              style="height:44px"
              placeholder="Search Pengepul"
            />
          </div>
          <div class="d-flex flex-column justify-content-center mt-4">
            <div class="bg-warning p-3 rounded-3 w-100 mt-2">
              <h3>Nama Pengepul</h3>
              <p>Alamat Pengepul</p>
              <p>08381123123</p>
            </div>
            <div class="bg-warning p-3 rounded-3 w-100 mt-2">
              <h3>Nama Pengepul</h3>
              <p>Alamat Pengepul</p>
              <p>08381123123</p>
            </div>
            <div class="bg-warning p-3 rounded-3 w-100 mt-2">
              <h3>Nama Pengepul</h3>
              <p>Alamat Pengepul</p>
              <p>08381123123</p>
            </div>
            <div class="bg-warning p-3 rounded-3 w-100 mt-2">
              <h3>Nama Pengepul</h3>
              <p>Alamat Pengepul</p>
              <p>08381123123</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("list-pengepul", ListPengepul);
