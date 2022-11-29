import "./skeleton/skeleton-tips";

class AnorganikPage extends HTMLElement {
  constructor() {
    super();
    this.filter;
    this.data = [];
  }

  async connectedCallback() {
    this.render();

    const reqAnorganik = await fetch("http://localhost:5000/anorganik", {
      method: "GET",
    });
    const reqAnorganikJson = await reqAnorganik.json();
    const dataFromApi = reqAnorganikJson.data;
    this.data.push(...dataFromApi);
    this.htmlstring = this.createhtmlListAnorganik(this.data);
    this.searchButton = this.querySelector("button.search");
    this.searchInput = this.querySelector(".search-input");
    this.listAnorganikElement = this.querySelector(".container-anorganik");
    this.listAnorganikElement.classList.add("row");
    this.listAnorganikElement.innerHTML = this.htmlstring;
    this.searchListener();
  }

  searchListener() {
    this.searchButton.addEventListener("click", () => {
      const inputText = this.searchInput.value;
      this.filter = this.data.filter((anorganik) =>
        anorganik.name.toLowerCase().includes(inputText.toLowerCase())
      );
      this.listAnorganikElement.innerHTML = this.createhtmlListAnorganik(
        this.filter
      );
    });
  }

  createHtmlAnorganik(anorganik) {
    const { name, description, image, video } = anorganik;
    return `
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
        <div class="card">
          <img src="${image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text text-break" style="height: 190px">${description}</p>
            <a href="#" type="button" class="btn btn-warning">Detail >></a>
          </div>
        </div>
      </div>
    `;
  }

  createhtmlListAnorganik(arrayAnorganik) {
    const array = [];
    for (let i = 0; i < arrayAnorganik.length; i++) {
      const objectA = arrayAnorganik[i];
      const objectAnorganik = this.createHtmlAnorganik(objectA);
      array.push(objectAnorganik);
    }
    return array.join("");
  }

  async render() {
    this.innerHTML = `
      <div class="container-expand-lg">
        <h1 class="text-center mt-4">Tips Anorganik</h1>
        <div
          class="container-expand-lg bg-success p-4 rounded-5 rounded-bottom"
        >
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
          <div class="container-expand-lg container-anorganik">
            <skeleton-tips class="row"></skeleton-tips>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("anorganik-page", AnorganikPage);
