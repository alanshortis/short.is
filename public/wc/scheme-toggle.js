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
      <svg width="0" height="0" class="sprite">
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="dark">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="light">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
        </symbol>
      </svg>

      <style>
        button {
          background: none;
          color: currentColor;
          cursor: pointer;
          display: flex;
          width: 1.25rem;
        }
        button > svg {
          width: 1.25rem;
          height: 1.25rem;
        }
        .sprite {
          display: none;
        }
      </style>

      <button type="button" title="${label}" aria-label="${label}">
        <svg>
          <use href="#${this.schemeNotInUse()}"></use>
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

if ('customElements' in window) {
  customElements.define('scheme-toggle', SchemeToggle);
}
