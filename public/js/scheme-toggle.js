if ('customElements' in window) {
  customElements.define(
    'scheme-toggle',
    class extends HTMLElement {
      constructor() {
        super();
        this.STORAGE_KEY = 'scheme';
        this.MQ_DARK = window.matchMedia('(prefers-color-scheme: dark)');
        this.state = '';
        this.schemes = ['light', 'auto', 'dark'];
      }

      connectedCallback() {
        this.setInitialScheme();
      }

      setState(scheme) {
        const { classList } = document.body;

        this.state = scheme;
        localStorage.setItem(this.STORAGE_KEY, this.state);

        if (this.state === 'auto') {
          classList.remove(...this.schemes);
          classList.add(this.MQ_DARK.matches ? 'dark' : 'light');
        } else {
          classList.remove(this.schemeNotInUse());
          classList.add(this.state);
        }
      }

      schemeNotInUse() {
        return this.state === 'light' ? 'dark' : 'light';
      }

      setInitialScheme() {
        const storedScheme = localStorage.getItem(this.STORAGE_KEY);

        this.setState(storedScheme || 'auto');
        this.render();
      }

      render() {
        this.innerHTML = /*html*/ `
          <fieldset class="st-fields">
            <legend>Colour scheme</legend>
              ${this.schemes
                .map(
                  scheme => /*html*/ `
                  <input type="radio" id="${scheme}-radio" value="${scheme}" name="scheme">
                  <label for="${scheme}-radio">${scheme}</label>
              `
                )
                .join('')}
          </fieldset>
        `;

        this.querySelector(`#${this.state}-radio`).checked = true;
        this.listeners();
      }

      listeners() {
        this.querySelectorAll('[name=scheme]').forEach(option => {
          option.addEventListener('change', () => {
            this.setState(option.value);
          });
        });

        this.MQ_DARK.addEventListener('change', () => {
          if (this.state === 'auto') this.setState('auto');
        });
      }
    }
  );
}

// ONE HOUR
// TS WEB COMPONENTS, DON'T TRANSPILE THE CLASS
