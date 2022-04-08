if ('share' in navigator) {
  customElements.define(
    'share-button',
    class extends HTMLElement {
      connectedCallback() {
        this.render();
      }

      render() {
        this.innerHTML = `
          &nbsp;&middot;&nbsp;<button type="button">share</button>
        `;

        this.listeners();
      }

      listeners() {
        this.querySelector('button').addEventListener('click', async () => {
          await navigator.share({
            text: 'Title — short.is',
            url: 'https://short.is/path',
          });
        });
      }
    }
  );
}
