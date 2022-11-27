/* eslint-disable no-empty-function */
class ListPengepul extends HTMLElement {
  constructor() {
    super();
    this.htmlstring = this.template(this.createhtmlListPengepul(this.data));
    this.filter;
  }

  data = [
    {
      namaPengepul: "Bank Sampah Sumber Rejeki",
      alamat:
        "Rt03/Rw 64 Ganjuran Manukan, Jl. Mijil No.22, Ngabean Wetan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
      noHp: "082132748948",
    },
    {
      namaPengepul: "Bank Sampah Assalam",
      alamat:
        "Mladangan, Minomartani, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
      noHp: "0274868405",
    },
    {
      namaPengepul: "Bank Sampah BERSERI",
      alamat:
        "Jl. Cik Di Tiro No.5, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
      noHp: "082136744248",
    },
  ];

  connectedCallback() {
    this.render();
    this.searchButton = this.querySelector("button.search");
    this.searchInput = this.querySelector(".search-input");
    this.listPengepulElement = this.querySelector(".list-pengepul-data");
    this.searchListener();
  }

  searchListener() {
    this.searchButton.addEventListener("click", () => {
      const inputText = this.searchInput.value;
      this.filter = this.data.filter((pengepul) => {
        return pengepul.alamat.toLowerCase().includes(inputText.toLowerCase());
      });
      this.listPengepulElement.innerHTML = this.createhtmlListPengepul(
        this.filter
      );
    });
  }

  createHtmlPengepul(pengepul) {
    const namaPengepul = pengepul.namaPengepul;
    const alamat = pengepul.alamat;
    const noHp = pengepul.noHp;
    return `
      <div class="bg-warning p-3 rounded-3 w-100 mt-2">
        <h3>${namaPengepul}</h3>
        <p>${alamat}</p>
        <p>${noHp}</p>
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

  template(listPengepul) {
    return `
      <div class="container-expand-lg">
        <h1 class="text-center mt-4">List Pengepul</h1>
        <div class="list-pengepul container-expand-lg p-4 rounded-5">
          <div class="d-flex justify-content-center">
            <div class="input-group mb-3">
              <input
                type="text"
                class="search-input form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="search form-control">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="list-pengepul-data d-flex flex-column justify-content-center mt-4">
            ${listPengepul}
          </div>
        </div>
      </div>
    `;
  }

  async render() {
    this.innerHTML = this.htmlstring;
  }
}

customElements.define("list-pengepul", ListPengepul);
