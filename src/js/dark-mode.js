class DarkMode extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'DARK MODE!!';
  }
}

const registerDarkMode = () => {
  customElements.define('dark-mode', DarkMode);
};

export default registerDarkMode;
