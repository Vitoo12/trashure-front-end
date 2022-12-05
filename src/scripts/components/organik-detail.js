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
      <h2 class="card-title py-2 text-uppercase fs-1">${name}</h2>
      <div class="row">
        <div class="col-xl-8" style="min-height:250px">
          <img src="${image}" class="w-100 lazyload" alt="${name}" style="max-height:500px;" />
        </div>
        <div class="col-xl-4">
          <p class="video-text fs-5">Video = <a href="${video}" target="_blank" class="link-success">${video}</a> </p> 
          <p class="description-text lh-lg" style="font-size:1em;">${description} </p>
        </div>
      </div>
    </div>

    <div class="organik-step" style="padding:50px 0px">
      <h2 class="mb-3">Tips and Trick mengelola sampah ${name}</h2>
    </div>
    `;
  }

  createhtmlStepOrganik(stepOrganik, index) {
    const { title, descDetail, imageDetail } = stepOrganik;
    return `
    <div class="py-4">
      <h3 class="card-title py-2">${index + 1}. ${title.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')}
      </h3>
      <div style="min-height:300px;">
        <img src="${imageDetail}" class="w-100 lazyload" alt="${title}" style="max-height:500px; max-width:500px"/>
      </div>
      <p class="text-break lh-lg" style="1em">${descDetail}</p>
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
