if ('share' in navigator) {
  customElements.define(
    'share-button',
    class extends HTMLElement {
      constructor() {
        super();
        this.shareUrl = window.location.href;
        this.shareTitle = document.getElementsByTagName('title')[0].innerText;
      }

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
          try {
            await navigator.share({
              text: `${this.shareTitle} — short.is`,
              url: this.shareUrl,
            });
          } catch (e) {
            console.warn(e);
          }
        });
      }
    }
  );
}
