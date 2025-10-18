import type { DecimalTime } from '../shared-types';

type DecimalTimeCallback = (decimalTime: DecimalTime) => void;

class SharedDecimalClockManager {
  private static instance: SharedDecimalClockManager | null = null;
  private timer: number | null = null;
  private subscribers: Set<DecimalTimeCallback> = new Set();

  private static readonly TOTAL_SECONDS_IN_DAY = 24 * 60 * 60;
  private static readonly TOTAL_METRIC_SECONDS_IN_DAY = 10 * 100 * 100;
  private static readonly DECIMAL_SECOND_MS = 864;

  private constructor() {}

  static getInstance(): SharedDecimalClockManager {
    if (!SharedDecimalClockManager.instance) {
      SharedDecimalClockManager.instance = new SharedDecimalClockManager();
    }
    return SharedDecimalClockManager.instance;
  }

  subscribe(callback: DecimalTimeCallback): void {
    if (this.subscribers.size === 0) {
      this.startTimer();
    }

    this.subscribers.add(callback);
    callback(this.getDecimalTime());
  }

  unsubscribe(callback: DecimalTimeCallback): void {
    this.subscribers.delete(callback);

    if (this.subscribers.size === 0) {
      this.stopTimer();
    }
  }

  private getDecimalTime(): DecimalTime {
    const now = new Date();
    const secondsSinceMidnight =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds() / 1000;

    const fractionOfDay = secondsSinceMidnight / SharedDecimalClockManager.TOTAL_SECONDS_IN_DAY;
    const metricSecondsElapsed = fractionOfDay * SharedDecimalClockManager.TOTAL_METRIC_SECONDS_IN_DAY;

    const hours = Math.floor(metricSecondsElapsed / 10_000);
    const minutes = Math.floor((metricSecondsElapsed % 10_000) / 100);
    const seconds = Math.floor(metricSecondsElapsed % 100);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  private startTimer(): void {
    if (this.timer) return;

    this.timer = window.setInterval(() => {
      const decimalTime = this.getDecimalTime();
      this.subscribers.forEach(callback => {
        callback(decimalTime);
      });
    }, SharedDecimalClockManager.DECIMAL_SECOND_MS);
  }

  private stopTimer(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
}

export default SharedDecimalClockManager;
