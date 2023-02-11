// @ts-ignore
if ('customElements' in window && !customElements.get('scheme-toggle')) {
  customElements.define(
    'scheme-toggle',
    class extends HTMLElement {
      STORAGE_KEY = 'scheme';
      MQ_DARK = window.matchMedia('(prefers-color-scheme: dark)');
      state = 'auto';
      schemes = ['light', 'auto', 'dark'];

      connectedCallback() {
        this.setInitialScheme();
      }

      setState(scheme: string) {
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

        const radioButton = this.querySelector(`#${this.state}-radio`) as HTMLInputElement;
        radioButton.checked = true;
        this.listeners();
      }

      listeners() {
        const radioButtons = this.querySelectorAll('[name=scheme]') as NodeListOf<HTMLInputElement>;

        radioButtons.forEach(option => {
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
