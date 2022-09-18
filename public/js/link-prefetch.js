if ('customElements' in window) {
  customElements.define(
    'link-prefetch',
    class extends HTMLElement {
      connectedCallback() {
        const aElem = this.querySelector('a');
        const headElem = document.querySelector('head');
        const linkElem = document.createElement('link');

        linkElem.rel = 'prefetch';
        linkElem.href = aElem.href;

        aElem.addEventListener(
          'mouseover',
          () => {
            headElem.appendChild(linkElem);
          },
          { once: true }
        );
      }
    }
  );
}
