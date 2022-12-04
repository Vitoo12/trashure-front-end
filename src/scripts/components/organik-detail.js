import "./skeleton/skeleton-detail";
import UrlParser from "../routes/url-parser";

class OrganikDetail extends HTMLElement {
  constructor() {
    super();
    this.data = [];
  }

  async connectedCallback() {
    this.render();
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const reqOrganik = await fetch(
      `https://trashure-back-end-production.up.railway.app/organik/${id}`,
      {
        method: "GET",
      }
    );
    const reqOrganikJson = await reqOrganik.json();
    const dataFromApi = reqOrganikJson.data;
    this.data = dataFromApi;
    console.log(dataFromApi);
    this.htmlstring = this.template(this.data);
    this.firstElementChild.innerHTML = this.htmlstring;
    this.htmlstringStep = this.createhtmlListStepOrganik(this.data.Tips);
    this.stepOrganikElement = this.querySelector(".organik-step");
    this.stepOrganikElement.innerHTML = this.htmlstringStep;
  }

  template(organik) {
    const { name, description, image, video } = organik;

    return `
    <div class="organik-name">
    <h3 class="card-title py-2">${name.toUpperCase()}</h3>
    <p class="video-text">Video = <a href="${video}" class="link-success">${video}</a> </p> 
    <img src="${image}" class="img-organik-detail" alt="..." />
    <p class="video-text">${description} </p>
    </div>
    <div class="organik-step"></div>
    `;
  }

  createhtmlStepOrganik(stepOrganik, index) {
    const { title, descDetail, imageDetail, OrganikId } = stepOrganik;
    return `
    <h5 class="card-title py-2">${index + 1}. ${title
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")}</h5>
    <img src="${imageDetail}" class="img-Organik-detail" alt="..." />
    <p class="text-break" >${descDetail}</p>
    `;
  }

  createhtmlListStepOrganik(arrayOrganik) {
    const array = [];
    for (let i = 0; i < arrayOrganik.length; i++) {
      const objectO = arrayOrganik[i];
      const objectOrganik = this.createhtmlStepOrganik(objectO, i);
      array.push(objectOrganik);
    }
    return array.join("");
  }

  async render() {
    this.innerHTML = `
        <div class="container-lg">
          <skeleton-detail></skeleton-detail>
        </div>
                  `;
  }
}

customElements.define("organik-detail", OrganikDetail);
