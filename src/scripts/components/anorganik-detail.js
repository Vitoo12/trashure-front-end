import './skeleton/skeleton-detail';
import UrlParser from '../routes/url-parser';

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
        method: 'GET',
      },
    );
    const reqAnorganikJson = await reqAnorganik.json();
    const dataFromApi = reqAnorganikJson.data;
    this.data = dataFromApi;
    this.htmlstring = this.template(this.data);
    this.firstElementChild.innerHTML = this.htmlstring;
    this.htmlstringStep = this.createhtmlListStepAnorganik(this.data.Tips);
    this.stepAnorganikElement = this.querySelector('.anorganik-step');
    this.stepAnorganikElement.innerHTML += this.htmlstringStep;
  }

  template(anorganik) {
    const {
      name, description, image, video,
    } = anorganik;

    return `
    <div class="container-expand-lg anorganik-name py-4">
      <a href="#/anorganik" class="text-black" aria-label="back to anorganik page"><i class="bi bi-arrow-left" style="font-size:44px"></i></a>
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

    <div class="anorganik-step" style="padding:50px 0px">
      <h2 class="mb-3" tabindex="0">Tips and Trick mengelola sampah ${name}</h2>
    </div>
    `;
  }

  createhtmlStepAnorganik(stepAnorganik, index) {
    const { title, descDetail, imageDetail } = stepAnorganik;
    return `
    <div class="py-4">
      <h3 class="card-title py-2" tabindex="0">${index + 1}. ${title.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')}
      </h3>
      <div style="min-height:300px;">
        <img src="${imageDetail}" tabindex="0" class="w-100 lazyload" alt="${title}" style="max-height:500px; max-width:500px"/>
      </div>
      <p class="text-break lh-lg" style="font-size:1em;" tabindex="0">${descDetail}</p>
    </div>
    `;
  }

  createhtmlListStepAnorganik(arrayAnorganik) {
    const array = [];
    for (let i = 0; i < arrayAnorganik.length; i += 1) {
      const objectA = arrayAnorganik[i];
      const objectAnorganik = this.createhtmlStepAnorganik(objectA, i);
      array.push(objectAnorganik);
    }
    return array.join('');
  }

  async render() {
    this.innerHTML = `
        <div class="container-lg" >
          <skeleton-detail></skeleton-detail>
        </div>
                `;
  }
}

customElements.define('anorganik-detail', AnorganikDetail);
