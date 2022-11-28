/* eslint-disable no-empty-function */
class SkeletonDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <div class="container py-3">
        <p class="placeholder-glow">
            <span class="placeholder col-6" style="height:30px;"></span>
            <span class="placeholder col-12"></span>
        </p>
    </div>
    <div class="container">
        <p class="placeholder-glow">
            <span class="placeholder col-6 mb-2" style="height:25px;"></span>
            <span class="placeholder col-8" style="height:200px"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-10"></span>
            <span class="placeholder col-12"></span>
        </p>
        <p class="placeholder-glow">
            <span class="placeholder col-6 mb-2" style="height:25px;"></span>
            <span class="placeholder col-8" style="height:200px"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-10"></span>
            <span class="placeholder col-12"></span>
        </p>
        <p class="placeholder-glow">
            <span class="placeholder col-6 mb-2" style="height:25px;"></span>
            <span class="placeholder col-8" style="height:200px"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-10"></span>
            <span class="placeholder col-12"></span>
        </p>
        <p class="placeholder-glow">
            <span class="placeholder col-6 mb-2" style="height:25px;"></span>
            <span class="placeholder col-8" style="height:200px"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-10"></span>
            <span class="placeholder col-12"></span>
        </p>
    </div>
                `;
  }
}

customElements.define('skeleton-detail', SkeletonDetail);
