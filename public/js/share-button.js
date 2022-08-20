if ('customElements' in window && 'share' in navigator) {
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
          &middot; <button type="button" class="sb-label">Share</button>
        `;

        this.listeners();
      }

      listeners() {
        this.querySelector('button').addEventListener('click', async () => {
          try {
            await navigator.share({
              text: this.shareTitle,
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
