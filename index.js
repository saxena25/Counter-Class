class Counter {
    constructor() {
      this.count = 0;
      this.interval = null;
      this.incrementButton = document.getElementById('incrementButton');
      this.decrementButton = document.getElementById('decrementButton');
      this.toggleButton = document.getElementById('toggleButton');
      this.countDisplay = document.getElementById('countDisplay');
    }

    start() {
      this.toggleButton.textContent = 'Stop';
      this.interval = setInterval(() => {
        this.increment();
      }, 1000);
    }

    stop() {
      this.toggleButton.textContent = 'Start';
      clearInterval(this.interval);
    }

    increment() {
      this.count++;
      this.updateDisplay();
    }

    decrement() {
      this.count--;
      this.updateDisplay();
    }

    updateDisplay() {
      this.countDisplay.textContent = this.count;
    }
  }

  const counter = new Counter();

  counter.toggleButton.addEventListener('click', () => {
    if (counter.interval) {
      counter.stop();
    } else {
      counter.start();
    }
  });

  counter.incrementButton.addEventListener('click', () => {
    counter.stop();
    counter.increment();
  });

  counter.decrementButton.addEventListener('click', () => {
    counter.stop();
    counter.decrement();
  });