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
                  <h1 class="text-light fs-2">Selamat Datang, Pahlawan Bumi</h1>
                </div>
                <div class="col-md-6">
                  <img src="/images/image-hero2.jpg"  style="height:350px;">
                </div>
              </div>
            </div>
            <div class='container-expand-lg'>
              <div class="container-lg py-3">
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-8">
                    <h2>Apa itu trashure (?)</h2>
                    <p>Trashure adalah sebuah aplikasi yang memiliki beberapa fitur untuk membantu masyarakat dalam memanfaatkan sampah yang ia miliki untuk dijadikan barang yang bermanfaat dan bernilai lebih.</p>
                  </div>
                  <div class="col-md-2">
                    <img src="/images/image-ask.jpg" style="height:200px; width:200px;">
                  </div> 
                </div>
              </div>
              <div class="container-lg py-3">
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-8">
                    <h2>Tujuan dan Misi (!)</h2>
                    <p>Tujuan dan Misi kami ialah membantu masyarakat dalam mengelola sampah yang ia miliki agar dapat dijadikan barang yang bermanfaat, serta membantu masyarakat untuk dapat terhubung oleh pengepul didaerah yang ia tinggali, dan pastinya mencegah terjadinya kerusakan pada bumi yang disebabkan oleh sampah-sampah</p>
                  </div>
                  <div class="col-md-2">
                    <img src="/images/image-exclamation.jpg" style="height:200px; width:200px;">
                  </div> 
                </div>
              </div>
              <div class="container-lg mb-4 py-3">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-8">
                      <h2>Solusi (*)</h2>
                      <p>Solusi kami ialah memberikan masyarakat atau user untuk dapat mencari serta mengetahui pengepul terdekat melalui kontak yang trashure sediakan pada fitur List-Pengepul dan juga memberikan beberapa tips atau cara bagaimana mengelola sampah organik ataupun anorganik agar dapat dijadikan sebagai barang yang berguna dan bermanfaat kembali</p>
                    </div>
                    <div class="col-md-2">
                      <img src="/images/image-solution.jpg" style="height:200px; width:200px;">
                    </div> 
                </div>
              </div>
            </div>
          </div>
          `;
  }
}

customElements.define('home-page', HomePage);
