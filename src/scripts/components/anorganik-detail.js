import "./skeleton/skeleton-detail";
import UrlParser from "../routes/url-parser";

class AnorganikDetail extends HTMLElement {
  constructor() {
    super();
    this.data = [];
  }

  async connectedCallback() {
    this.render();
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const reqAnorganik = await fetch(
      `https://trashure-back-end-production.up.railway.app/anorganik/${id}`,
      {
        method: "GET",
      }
    );
    const reqAnorganikJson = await reqAnorganik.json();
    const dataFromApi = reqAnorganikJson.data;
    this.data = dataFromApi;
    this.htmlstring = this.template(this.data);
    this.firstElementChild.innerHTML = this.htmlstring;
    this.htmlstringStep = this.createhtmlListStepAnorganik(this.data.Tips);
    this.stepAnorganikElement = this.querySelector(".anorganik-step");
    this.stepAnorganikElement.innerHTML = this.htmlstringStep;
  }

  template(anorganik) {
    const { name, description, image, video } = anorganik;

    return `
    <div class="anorganik-name">
    <h3 class="card-title py-2">${name.toUpperCase()}</h3>
    <p class="video-text">Video = <a href="${video}" class="link-success">${video}</a> </p> 
    <img src="${image}" class="img-anorganik-detail" alt="..." />
    <p class="video-text">${description} </p>
    </div>
    <div class="anorganik-step"></div>
    `;
  }

  createhtmlStepAnorganik(stepAnorganik, index) {
    const { title, descDetail, imageDetail } = stepAnorganik;
    return `
    <h5 class="card-title py-2">${index + 1}. ${title
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")}</h5>
    <img src="${imageDetail}" class="img-anorganik-detail" alt="..." />
    <p class="text-break" >${descDetail}</p>
    `;
  }

  createhtmlListStepAnorganik(arrayAnorganik) {
    const array = [];
    for (let i = 0; i < arrayAnorganik.length; i++) {
      const objectA = arrayAnorganik[i];
      const objectAnorganik = this.createhtmlStepAnorganik(objectA, i);
      array.push(objectAnorganik);
    }
    return array.join("");
  }

  async render() {
    this.innerHTML = `
        <div class="container-lg" >
          <skeleton-detail></skeleton-detail>
        </div>
                `;
  }
}

customElements.define("anorganik-detail", AnorganikDetail);
