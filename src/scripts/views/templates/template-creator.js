const createPengepulListItemTemplate = (users) => `
  <div class="bg-warning p-3 rounded-3 w-100 mt-2" id="containerUsers">
      <h3 tabindex="0">${users.name || '-'}</h3>
      <p id="userAlamat" tabindex="0">${users.alamat || '-'}</p>
      <p tabindex="0">${users.number || '-'}</p>
  </div>
`;
const createTipsListItemTemplate = (tips) => `
  <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
    <div class="card">
      <img src="${tips.data.image || '-'}" class="card-img-top" alt="${tips.data.name || '-'}" style="height:200px;">
      <div class="card-body">
        <a href="#/organik/${tips.data.id || '-'}" class="text-decoration-none text-black fw-bold fs-2">${tips.data.name || '-'}</a>
        <p class="card-text">${tips.data.description || '-'}</p>
      </div>
    </div>                        
  </div>
`;

const createTipsDetailItemTemplate = (tips) => `
<div class="container py-3">
    <h2 class="fw-bold fs-1">${tips.data.name || '-'}</h2>
    <p class="fs-5">Video : <a href="${tips.data.video || '-'}" class="text-decoration-none">${tips.data.name || '-'}</a></p>
</div>
<div class="container">
    <h3>${tips.data.tip.title || '-'}</h3>
    <img src="${tips.data.tip.imageDetail || '-'}"class="w-75" style="height:200px;">
    <p>${tips.data.tip.descDetail || '-'}</p>
</div>
`;
export {
  createPengepulListItemTemplate,
  createTipsListItemTemplate,
  createTipsDetailItemTemplate,
};
