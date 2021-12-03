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
        const label = `Switch to ${this.schemeNotInUse()} theme`;

        this.innerHTML = `
          <svg width="0" height="0" class="sprite" style="display: none;">
            <symbol fill="none" id="dt" viewbox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17ZM1.062 8.5A7.437 7.437 0 0 1 8.5 1.062v14.876A7.438 7.438 0 0 1 1.062 8.5Z" fill="currentColor"/></symbol>
          </svg>
          <style>
            button {
              height: 1.25rem;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: -2px;
            }
            svg.icon {
              width: 1.25rem;
              height: 1.25rem;
            }
          </style>
          <button type="button" title="${label}" aria-label="${label}">
            <svg class="icon">
              <use href="#dt"></use>
            </svg>
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
