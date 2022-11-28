class SkeletonTips extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
                        <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
                          <div class="card placeholder-glow">
                            <div src="..." class="placeholder" style="height:200px;"></div>
                            <div class="card-body">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-12"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                            </div>
                          </div>                        
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
                          <div class="card placeholder-glow">
                            <div src="..." class="card-img-top placeholder" alt="..." style="height:200px;"></div>
                            <div class="card-body">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-12"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                            </div>
                          </div>                        
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
                          <div class="card placeholder-glow">
                            <div src="..." class="card-img-top placeholder" alt="..." style="height:200px;"></div>
                            <div class="card-body">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-12"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                            </div>
                          </div>                        
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 my-3">
                          <div class="card placeholder-glow">
                            <div src="..." class="card-img-top placeholder" alt="..." style="height:200px;"></div>
                            <div class="card-body">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-12"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                            </div>
                          </div>                        
                        </div>
                  `;
  }
}

customElements.define('skeleton-tips', SkeletonTips);
