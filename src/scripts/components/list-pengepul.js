import './skeleton/skeleton-list';

class ListPengepul extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-expand-lg ">
    <h1 class="text-center mt-4">List Pengepul</h1>
    <div class="list-pengepul bg-success container-expand-lg p-4 rounded-5 rounded-bottom" style="min-height:500px;">
      <div class="d-flex justify-content-center">
        <div class="input-group mb-3">
          <input type="text" class="search-input form-control" id="searchInput" placeholder="Cari pengepul terdekat berdasarkan daerah disini.." aria-label="Search by address" aria-describedby="basic-addon2"/>
        </div>
      </div>
      <div id="containerCardTips">
          <skeleton-list></skeleton-list>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('list-pengepul', ListPengepul);
