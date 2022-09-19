if ('customElements' in window) {
  customElements.define(
    'click-timer',
    class extends HTMLElement {
      constructor() {
        super();
        this.attempts = 0;
        this.clickedAt = 0;
        this.hoveredAt = 0;
        this.hasHovered = false;
        this.hoverTimes = [];
      }

      connectedCallback() {
        this.render();
      }

      averageTime() {
        this.attempts = this.hoverTimes.length;
        const totalTime = this.hoverTimes.reduce((total, curr) => total + curr);

        return Math.ceil(totalTime / this.attempts);
      }

      render() {
        this.innerHTML = `
          <button type="button">Click</button>
          <dl>
            <dd>Click delay:</dd>
            <dt id="last"></span></dt>
          </dl>
          <dl>
            <dd>Average delay:</dd>
            <dt id="avg"></span></dt>
          </dl>
          <p id="discalimer">&nbsp;</p>
        `;

        this.listeners();
      }

      listeners() {
        const button = this.querySelector('button');
        const lastSpan = this.querySelector('#last');
        const avgSpan = this.querySelector('#avg');
        const discalimer = this.querySelector('#discalimer');

        button.addEventListener('mouseover', () => {
          this.isHovered = true;
          this.hoveredAt = Date.now();
        });

        button.addEventListener('mouseout', () => {
          this.isHovered = false;
          discalimer.innerHTML = '&nbsp;';
        });

        button.addEventListener('click', () => {
          if (this.isHovered) {
            this.isHovered = false;
            this.clickedAt = Date.now();
            this.hoverTimes.push(this.clickedAt - this.hoveredAt);

            lastSpan.textContent = `${this.hoverTimes.at(-1)}ms`;
            avgSpan.textContent = `${this.averageTime()}ms over ${this.attempts} click${
              this.attempts === 1 ? '' : 's'
            }`;
            discalimer.innerHTML = '&nbsp;';
          } else {
            discalimer.textContent = 'Remember to move away from the button between clicks';
          }
        });
      }
    }
  );
}
