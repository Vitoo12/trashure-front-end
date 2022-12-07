import './skeleton/skeleton-detail';
import UrlParser from '../routes/url-parser';

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
        method: 'GET',
      },
    );
    const reqOrganikJson = await reqOrganik.json();
    const dataFromApi = reqOrganikJson.data;
    this.data = dataFromApi;
    this.htmlstring = this.template(this.data);
    this.firstElementChild.innerHTML = this.htmlstring;
    this.htmlstringStep = this.createhtmlListStepOrganik(this.data.Tips);
    this.stepOrganikElement = this.querySelector('.organik-step');
    this.stepOrganikElement.innerHTML += this.htmlstringStep;
  }

  template(organik) {
    const {
      name, description, image, video,
    } = organik;

    return `
    <div class="container-expand-lg organik-name py-4">
      <a href="#/organik" class="text-black" aria-label="back to organik page"><i class="bi bi-arrow-left" style="font-size:44px"></i></a>
      <h2 class="card-title py-2 text-uppercase fs-1" tabindex="0">${name}</h2>
      <div class="row">
        <div class="col-xl-8" style="min-height:250px">
          <img src="${image}" tabindex="0" class="w-100 lazyload" alt="${name}" style="max-height:500px;" />
        </div>
        <div class="col-xl-4">
          <p class="video-text fs-5" tabindex="0">Video = <a href="${video}" target="_blank" class="link-success">${video}</a> </p> 
          <p class="description-text lh-lg" style="font-size:1em;" tabindex="0">${description} </p>
        </div>
      </div>
    </div>

    <div class="organik-step" style="padding:50px 0px">
      <h2 class="mb-3" tabindex="0">Tips and Trick mengelola sampah ${name}</h2>
    </div>
    `;
  }

  createhtmlStepOrganik(stepOrganik, index) {
    const { title, descDetail, imageDetail } = stepOrganik;
    return `
    <div class="py-4">
      <h3 class="card-title py-2" tabindex="0">${index + 1}. ${title.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')}
      </h3>
      <div style="min-height:300px;">
        <img src="${imageDetail}" class="w-100 lazyload" tabindex="0" alt="${title}" style="max-height:500px; max-width:500px"/>
      </div>
      <p class="text-break lh-lg" style="font-size:1em;" tabindex="0">${descDetail}</p>
    </div>
    `;
  }

  createhtmlListStepOrganik(arrayOrganik) {
    const array = [];
    for (let i = 0; i < arrayOrganik.length; i += 1) {
      const objectO = arrayOrganik[i];
      const objectOrganik = this.createhtmlStepOrganik(objectO, i);
      array.push(objectOrganik);
    }
    return array.join('');
  }

  async render() {
    this.innerHTML = `
        <div class="container-lg">
          <skeleton-detail></skeleton-detail>
        </div>
                  `;
  }
}

customElements.define('organik-detail', OrganikDetail);
