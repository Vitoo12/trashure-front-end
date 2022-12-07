import './skeleton/skeleton-tips';

class AnorganikPage extends HTMLElement {
  constructor() {
    super();
    this.filter = null;
    this.data = [];
  }

  async connectedCallback() {
    this.render();

    const reqAnorganik = await fetch(
      'https://trashure-back-end-production.up.railway.app/anorganik',
      {
        method: 'GET',
      },
    );
    const reqAnorganikJson = await reqAnorganik.json();
    const dataFromApi = reqAnorganikJson.data;
    this.data.push(...dataFromApi);
    this.htmlstring = this.createhtmlListAnorganik(this.data);
    this.searchButton = this.querySelector('button.search');
    this.searchInput = this.querySelector('.search-input');
    this.listAnorganikElement = this.querySelector('.container-anorganik');
    this.listAnorganikElement.classList.add('row');
    this.listAnorganikElement.innerHTML = this.htmlstring;
    this.searchListener();
  }

  searchListener() {
    this.searchButton.addEventListener('click', () => {
      const inputText = this.searchInput.value;
      this.filter = this.data.filter((anorganik) => anorganik.name.toLowerCase()
        .includes(inputText.toLowerCase()));
      this.listAnorganikElement.innerHTML = this.createhtmlListAnorganik(
        this.filter,
      );
    });
  }

  createHtmlAnorganik(anorganik) {
    const {
      name, description, image, id,
    } = anorganik;
    return `
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
        <div class="card" style="height:550px">
          <img src="${image}" class="lazyload w-100" tabindex="0" alt="${name}" style="height:280px;"/>
          <div class="card-body">
            <h5 class="card-title text-capitalize" tabindex="0">${name}</h5>
            <p class="card-page card-text text-break" style="overflow:auto; height:140px;" tabindex="0">${description}</p>
            <a href="#/anorganik/${id}" type="button" class="btn btn-warning">Detail</a>
          </div>
        </div>
      </div>
    `;
  }

  createhtmlListAnorganik(arrayAnorganik) {
    const array = [];
    for (let i = 0; i < arrayAnorganik.length; i += 1) {
      const objectA = arrayAnorganik[i];
      const objectAnorganik = this.createHtmlAnorganik(objectA);
      array.push(objectAnorganik);
    }
    return array.join('');
  }

  async render() {
    this.innerHTML = `
      <div class="container-expand-lg">
        <h1 class="text-center mt-4" tabindex="0">Tips Anorganik</h1>
        <div class="container-expand-lg bg-success p-4 rounded-5 rounded-bottom" style="min-height:500px;">
          <div class="d-flex justify-content-center h-100">
            <div class="input-group mb-3">
              <input type="text" class="search-input form-control" placeholder="Mau daur ulang limbah apa hari ini?" aria-label="Mau daur ulang limbah apa hari ini?" aria-describedby="basic-addon2"/>
              <div class="input-group-append ms-1">
                <button class="search form-control bg-warning" aria-label="Search Button">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="container-expand-lg row container-anorganik">
            <skeleton-tips class="row"></skeleton-tips>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('anorganik-page', AnorganikPage);
