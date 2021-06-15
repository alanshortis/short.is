class CodeCopy extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('code-copy');
    this.render();
  }

  render() {
    // Slot to get children?
    // Get attribute for lang label?
    this.innerHTML = `<button type="button">Copy</button>`;
  }
}

if ('customElements' in window) {
  customElements.define('code-copy', CodeCopy);
}
