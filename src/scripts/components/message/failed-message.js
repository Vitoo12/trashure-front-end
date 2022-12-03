class FailedMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="alert alert-danger d-flex align-items-center" role="alert">
        <i class="bi bi-x-circle-fill"></i>
        <div>
            <b>[FAILED]</b>, Something is wrong !! 
        </div>
    </div>
                    `;
  }
}

customElements.define('failed-message', FailedMessage);
