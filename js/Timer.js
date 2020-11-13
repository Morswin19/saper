import { UI } from './UI.js';

export class Timer extends UI {
  #element = null;
  #interval = null;
  numberOfSeconds = 0;
  maxNumberOfSeconds = 999;

  init() {
    this.#element = this.getElement(this.UiSelectors.timer);
  }

  #startTimer() {
    this.#interval = setInterval(() => this.#updateTimer(), 1000);
  }

  stopTimer() {
    clearInterval(this.#interval);
  }

  resetTimer() {
    this.numberOfSeconds = 0;
    this.#setTimerValue(this.numberOfSeconds);
    this.stopTimer();
    this.#startTimer();
  }

  #updateTimer() {
    if (this.maxNumberOfSeconds > this.numberOfSeconds) {
      this.numberOfSeconds++;
      this.#setTimerValue(this.numberOfSeconds);
      return;
    }
    this.stopTimer();
  }

  #setTimerValue(value) {
    this.#element.textContent = value;
  }
}
