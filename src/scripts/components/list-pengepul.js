/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-empty-function */
import "./skeleton/skeleton-list";
class ListPengepul extends HTMLElement {
  constructor() {
    super();
    this.filter;
    this.data = [];
  }

  async connectedCallback() {
    this.render();
    const reqList = await fetch("http://localhost:5000/user", {
      method: "GET",
    });
    const reqListJson = await reqList.json();
    const dataFromApi = reqListJson.data;
    this.data.push(...dataFromApi);
    this.htmlstring = this.createhtmlListPengepul(this.data);
    this.searchButton = this.querySelector("button.search");
    this.searchInput = this.querySelector(".search-input");
    this.listPengepulElement = this.querySelector(".list-pengepul-data");
    this.listPengepulElement.innerHTML = this.htmlstring;
    this.searchListener();
  }

  searchListener() {
    this.searchButton.addEventListener("click", () => {
      const inputText = this.searchInput.value;
      this.filter = this.data.filter((pengepul) =>
        pengepul.alamat.toLowerCase().includes(inputText.toLowerCase())
      );
      this.listPengepulElement.innerHTML = this.createhtmlListPengepul(
        this.filter
      );
    });
  }

  createHtmlPengepul(pengepul) {
    const { name } = pengepul;
    const { alamat } = pengepul;
    const { number } = pengepul;
    return `
      <div class="bg-warning p-3 rounded-3 w-100 mt-2">
        <h3>${name}</h3>
        <p>${alamat}</p>
        <p>${number}</p>
      </div>
    `;
  }

  createhtmlListPengepul(arrayPengepul) {
    const array = [];
    for (let i = 0; i < arrayPengepul.length; i++) {
      const objectP = arrayPengepul[i];
      const objectPengepul = this.createHtmlPengepul(objectP);
      array.push(objectPengepul);
    }
    return array.join("");
  }

  template() {
    return `
      <div class="container-expand-lg ">
        <h1 class="text-center mt-4">List Pengepul</h1>
        <div class="list-pengepul bg-success container-expand-lg p-4 rounded-5 rounded-bottom" style="min-height:500px;">
          <div class="d-flex justify-content-center">
            <div class="input-group mb-3">
              <input type="text" class="search-input form-control" placeholder="Search by address" aria-label="Search by address" aria-describedby="basic-addon2"/>
              <div class="input-group-append ms-1">
                <button class="search form-control bg-warning">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="list-pengepul-data d-flex flex-column justify-content-center mt-4">
            <skeleton-list></skeleton-list>
          </div>
        </div>
      </div>
    `;
  }

  async render() {
    this.innerHTML = this.template();
  }
}

customElements.define("list-pengepul", ListPengepul);
