import './skeleton/skeleton-tips';

class OrganikPage extends HTMLElement {
  constructor() {
    super();
    this.filter = null;
    this.data = [];
  }

  async connectedCallback() {
    this.render();

    const reqOrganik = await fetch(
      'https://trashure-back-end-production.up.railway.app/organik',
      {
        method: 'GET',
      },
    );
    const reqOrganikJson = await reqOrganik.json();
    const dataFromApi = reqOrganikJson.data;
    this.data.push(...dataFromApi);
    this.htmlstring = this.createhtmlListOrganik(this.data);
    this.searchButton = this.querySelector('button.search');
    this.searchInput = this.querySelector('.search-input');
    this.listOrganikElement = this.querySelector('.container-organik');
    this.listOrganikElement.classList.add('row');
    this.listOrganikElement.innerHTML = this.htmlstring;
    this.searchListener();
  }

  searchListener() {
    this.searchButton.addEventListener('click', () => {
      const inputText = this.searchInput.value;
      this.filter = this.data.filter((Organik) => Organik.name.toLowerCase()
        .includes(inputText.toLowerCase()));
      this.listOrganikElement.innerHTML = this.createhtmlListOrganik(
        this.filter,
      );
    });
  }

  createHtmlOrganik(organik) {
    const {
      name, description, image, id,
    } = organik;
    return `
    <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
    <div class="card" style="width:300px; height:500px">
      <img src="${image}" class="card-img-top lazyload" alt="${name}" style="height:300px;"/>
      <div class="card-body">
        <h5 class="card-title text-capitalize">${name}</h5>
        <p class="card-page card-text text-break" style="overflow:auto; height:150px;">${description}</p>
        <a href="#/organik/${id}" type="button" class="btn btn-warning">Detail</a>
      </div>
    </div>
  </div>
    `;
  }

  createhtmlListOrganik(arrayOrganik) {
    const array = [];
    for (let i = 0; i < arrayOrganik.length; i += 1) {
      const objectO = arrayOrganik[i];
      const objectOrganik = this.createHtmlOrganik(objectO);
      array.push(objectOrganik);
    }
    return array.join('');
  }

  async render() {
    this.innerHTML = `
                <div class="container-expand-lg">
                  <h1 class="text-center mt-4">Tips Organik</h1>
                  <div class="container-expand-lg bg-success p-4 rounded-5 rounded-bottom" style="min-height:500px;">
                  <div class="d-flex justify-content-center">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="search-input form-control"
                      placeholder="Mau daur ulang limbah apa hari ini?"
                      aria-label="Mau daur ulang limbah apa hari ini?"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append ms-1">
                      <button class="search form-control bg-warning">
                        <i class="bi bi-search"></i>
                      </button>
                    </div>
                  </div>
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
