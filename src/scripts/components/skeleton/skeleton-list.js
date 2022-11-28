/* eslint-disable no-empty-function */
class SkeletonList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
                    <div class="bg-warning p-3 rounded-3 w-100 mt-2">
                        <p class="placeholder-glow">
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-6"></span>
                        </p>
                    </div>
                    <div class="bg-warning p-3 rounded-3 w-100 mt-2">
                        <p class="placeholder-glow">
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-6"></span>
                        </p>
                    </div>
                    <div class="bg-warning p-3 rounded-3 w-100 mt-2">
                        <p class="placeholder-glow">
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-6"></span>
                        </p>
                    </div>
                    <div class="bg-warning p-3 rounded-3 w-100 mt-2">
                        <p class="placeholder-glow">
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-6"></span>
                        </p>
                    </div>
              `;
  }
}

customElements.define('skeleton-list', SkeletonList);
