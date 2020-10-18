class SchemeToggle extends HTMLElement {
  constructor() {
    super();
    this.STORAGE_KEY = 'as-scheme';
    this.MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)');
    this.state = 'light';
  }

  connectedCallback() {
    this.render();
    this.initialSceheme();
  }

  setState(scheme, saveScheme = false) {
    this.state = scheme;
    this.changeScheme();

    if (saveScheme) {
      localStorage.setItem(this.STORAGE_KEY, this.state);
    }
  }

  initialSceheme() {
    if (localStorage.getItem(this.STORAGE_KEY)) {
      this.setState(localStorage.getItem(this.STORAGE_KEY));
      return;
    }

    if (this.MEDIA_QUERY.matches) {
      this.setState('dark');
    }
  }

  changeScheme() {
    if (this.state === 'dark') {
      document.body.classList.add('dark');
      this.toggleButton.innerText = 'Light theme';
    } else {
      document.body.classList.remove('dark');
      this.toggleButton.innerText = 'Dark theme';
    }
  }

  render() {
    this.innerHTML = `<button id="js-scheme-toggle">Dark theme?</button>`;
    this.afterRender();
  }

  afterRender() {
    this.toggleButton = document.getElementById('js-scheme-toggle');

    this.toggleButton.addEventListener('click', () => {
      this.state === 'light' ? this.setState('dark', true) : this.setState('light', true);
    });

    this.MEDIA_QUERY.addEventListener('change', () => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.MEDIA_QUERY.matches ? this.setState('dark') : this.setState('light');
      }
    });
  }
}

const registerSchemeToggle = () => {
  if ('customElements' in window) {
    customElements.define('scheme-toggle', SchemeToggle);
  }
};

export default registerSchemeToggle;
