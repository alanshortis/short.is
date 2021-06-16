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
        const children = this.innerHTML;
        this.innerHTML =
          `<button type="button" class="code-copy">Copy</button> 
      <dl><dt class="visually-hidden">Code block language</dt><dd>${this.getAttribute('data-lang')}</dd></dl>
    ` + children;

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
