if ('customElements' in window && 'clipboard' in navigator) {
  customElements.define(
    'code-block',
    class extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<div class="code-block">
          ${this.innerHTML}
          <div>
            <button type="button">Copy</button>
          </div>
        </div>`;

        const copyButton = this.querySelector('button');

        const setButtonText = text => {
          copyButton.innerText = text;
          setTimeout(() => {
            copyButton.innerText = 'Copy';
          }, 3000);
        };

        // TODO: Replace with toast?
        copyButton.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(this.querySelector('pre').innerText);
            setButtonText('Copied');
          } catch (e) {
            setButtonText('Copy failed. Try again?');
          }
        });
      }
    }
  );
}
