class DarkMode extends HTMLElement {
  constructor() {
    super();
    this.STORAGE_KEY = 'scheme';
    this.MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)');
    this.state = '';
  }

  connectedCallback() {
    this.initialScheme();
  }

  setState(scheme, saveScheme = false) {
    this.state = scheme;

    if (saveScheme) {
      localStorage.setItem(this.STORAGE_KEY, this.state);
    }

    if (this.state === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    this.render();
  }

  initialScheme() {
    const storedState = localStorage.getItem(this.STORAGE_KEY);

    if (storedState) {
      this.setState(storedState);
      return;
    }

    if (this.MEDIA_QUERY.matches) {
      this.setState('dark');
      return;
    }

    this.setState('light');
  }

  schemeNotInUse() {
    return this.state === 'light' ? 'dark' : 'light';
  }

  render() {
    const label = `Switch to ${this.schemeNotInUse()} mode`;

    this.innerHTML = `
      <button type="button" title="${label}" aria-label="${label}">
        ${this.schemeNotInUse()}
      </button>
    `;

    this.listeners();
  }

  listeners() {
    this.querySelector('button').addEventListener('click', () => {
      this.setState(this.schemeNotInUse(), true);
    });

    this.MEDIA_QUERY.addEventListener('change', () => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.MEDIA_QUERY.matches ? this.setState('dark') : this.setState('light');
      }
    });
  }
}

if ('customElements' in window && !customElements.get('dark-mode')) {
  customElements.define('dark-mode', DarkMode);
}
