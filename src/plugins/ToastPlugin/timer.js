export class Timer {
   constructor(delay, callback) {
      this.delay = delay;
      this.callback = callback;

      this.timer = window.setTimeout(callback, delay)
   }
}