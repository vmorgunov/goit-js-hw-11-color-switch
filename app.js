const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', () => {
  colorSwitch.start();
});
refs.stop.addEventListener('click', () => {
  colorSwitch.stop();
});

const colorSwitch = {
  intervaltId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervaltId = setInterval(() => {
      const color = this.getRandomHexColor();
      document.body.style.backgroundColor = color;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervaltId);
  },
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
};
