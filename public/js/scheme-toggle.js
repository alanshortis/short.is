if ('customElements' in window) {
  customElements.define(
    'scheme-toggle',
    class extends HTMLElement {
      constructor() {
        super();
        this.KEY = 'scheme';
        this.MQ_DARK = window.matchMedia('(prefers-color-scheme: dark)');
        this.state = '';
      }

      connectedCallback() {
        this.initialScheme();
      }

      setState(scheme, saveScheme = false) {
        this.state = scheme;

        if (saveScheme) {
          localStorage.setItem(this.KEY, this.state);
        }

        if (this.state === 'dark') {
          document.body.classList.add('dark');
          document.body.classList.remove('light');
        } else {
          document.body.classList.add('light');
          document.body.classList.remove('dark');
        }

        this.render();
      }

      initialScheme() {
        const storedState = localStorage.getItem(this.KEY);

        if (storedState) {
          this.setState(storedState);
          return;
        }

        if (this.MQ_DARK.matches) {
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
            ${label}
          </button>
        `;

        this.listeners();
      }

      listeners() {
        this.querySelector('button').addEventListener('click', () => {
          this.setState(this.schemeNotInUse(), true);
        });

        this.MQ_DARK.addEventListener('change', () => {
          if (!localStorage.getItem(this.KEY)) {
            this.setState(this.MQ_DARK.matches ? 'dark' : 'light');
          }
        });
      }
    }
  );
}
