class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="container-expand-lg">
            <div class="container-expand text-center content-hero" style='min-height:250px;'>
              <div class="row align-items-center">
                <div class="col-md-6 pt-4">
                  <h1 class="text-light fs-2" tabindex="0">Selamat Datang, Pahlawan Bumi</h1>
                </div>
                <div class="col-md-6">
                  <picture>
                      <source type="image/jpeg" srcset="./images/image-hero2.jpg" style="height:350px; widht:350px">
                      <img src='./images/image-hero2.webp' alt="Images Hero" style="height:350px; widht:350px">
                  </picture>
                </div>
              </div>
            </div>
            <div class='container-expand-lg'>
              <div class="container-lg py-3">
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-8">
                    <h2 tabindex="0">Apa itu trashure (?)</h2>
                    <p tabindex="0">Trashure adalah sebuah aplikasi yang memiliki beberapa fitur untuk membantu masyarakat dalam memanfaatkan sampah yang ia miliki untuk dijadikan barang yang bermanfaat dan bernilai lebih.</p>
                  </div>
                  <div class="col-md-2">
                    <picture>
                        <source type="image/jpeg" srcset="./images/image-ask.jpg" style="height:200px; width:200px;" alt="Ask image">
                        <img src='./images/image-ask.webp' alt="Ask image" style="height:200px; width:200px;">
                    </picture>
                  </div> 
                </div>
              </div>
              <div class="container-lg py-3">
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-8">
                    <h2 tabindex="0">Tujuan dan Misi (!)</h2>
                    <p tabindex="0">Tujuan dan Misi kami ialah membantu masyarakat dalam mengelola sampah yang ia miliki agar dapat dijadikan barang yang bermanfaat, serta membantu masyarakat untuk dapat terhubung oleh pengepul didaerah yang ia tinggali, dan pastinya mencegah terjadinya kerusakan pada bumi yang disebabkan oleh sampah-sampah</p>
                  </div>
                  <div class="col-md-2">
                    <picture>
                      <source type="image/jpeg" srcset="./images/image-exclamation.jpg" style="height:200px; width:200px;" alt="exclamation image">
                      <img src='./images/image-exclamation.webp' alt="exclamation image" style="height:200px; width:200px;">
                    </picture>
                  </div> 
                </div>
              </div>
              <div class="container-lg mb-4 py-3">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-8">
                      <h2 tabindex="0">Solusi (*)</h2>
                      <p tabindex="0">Solusi kami ialah memberikan masyarakat atau user untuk dapat mencari serta mengetahui pengepul terdekat melalui kontak yang trashure sediakan pada fitur List-Pengepul dan juga memberikan beberapa tips atau cara bagaimana mengelola sampah organik ataupun anorganik agar dapat dijadikan sebagai barang yang berguna dan bermanfaat kembali</p>
                    </div>
                    <div class="col-md-2">
                      <picture>
                        <source type="image/jpeg" srcset="./images/image-solution.jpg" style="height:200px; width:200px;" alt="solution image">
                        <img src='./images/image-solution.webp' alt="solution image" style="height:200px; width:200px;">
                      </picture>
                    </div> 
                </div>
              </div>
            </div>
          </div>
          `;
  }
}

customElements.define('home-page', HomePage);
