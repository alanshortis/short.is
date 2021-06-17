if ('customElements' in window && 'clipboard' in navigator) {
  customElements.define(
    'code-block',
    class extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.render();
      }

      render() {
        this.innerHTML = `<div class="code-block">
          ${this.innerHTML}
          <div class="code-block-header">
            <button type="button">Copy</button>
            <dl>
              <dt class="visually-hidden">Code block language</dt>
              <dd>${this.getAttribute('data-lang')}</dd>
            </dl>
          </div>
        </div>`;

        this.listeners();
      }

      listeners() {
        const copyButton = this.querySelector('button');

        copyButton.addEventListener('click', async () => {
          await navigator.clipboard.writeText(this.querySelector('pre').innerText);
          copyButton.innerText = 'Copied';
          setTimeout(() => {
            copyButton.innerText = 'Copy';
          }, 3000);
        });
      }
    }
  );
}
