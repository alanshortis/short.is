class SchemeToggle extends HTMLElement {
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
      <style>
        button {
          background: none;
          color: currentColor;
          cursor: pointer;
          display: flex;
          width: 1.25rem;
        }
        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      </style>
      <button type="button" title="${label}" aria-label="${label}">
        <svg>
          <use xlink:href="#${this.schemeNotInUse()}"></use>
        </svg>
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

const registerSchemeToggle = () => {
  if ('customElements' in window) {
    customElements.define('scheme-toggle', SchemeToggle);
  }
};

export default registerSchemeToggle;
