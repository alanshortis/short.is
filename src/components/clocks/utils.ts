export interface DecimalTime {
  hours: string;
  minutes: string;
  seconds: string;
}

export const DECIMAL_TIME_CONSTANTS = {
  TOTAL_SECONDS_IN_DAY: 24 * 60 * 60,
  TOTAL_METRIC_SECONDS_IN_DAY: 10 * 100 * 100,
  DECIMAL_SECOND_MS: 864, // 100,000 decimal seconds per day = 864ms per decimal second
} as const;

export function formatNumber(num: number, leadingZero: boolean = true): string {
  return String(Math.floor(num)).padStart(leadingZero ? 2 : 1, '0');
}

export function calculateDecimalTime(): DecimalTime {
  const now = new Date();
  const secondsSinceMidnight =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds() / 1000;

  // Calculate the fraction of the day that has passed
  const fractionOfDay = secondsSinceMidnight / DECIMAL_TIME_CONSTANTS.TOTAL_SECONDS_IN_DAY;

  // Convert the fraction of the day into metric time
  const metricSecondsElapsed = fractionOfDay * DECIMAL_TIME_CONSTANTS.TOTAL_METRIC_SECONDS_IN_DAY;

  // Break down metric time into hours, minutes, and seconds
  return {
    hours: formatNumber(metricSecondsElapsed / 10_000, false),
    minutes: formatNumber((metricSecondsElapsed % 10_000) / 100),
    seconds: formatNumber(metricSecondsElapsed % 100),
  };
}

export function shouldUpdateTime(): boolean {
  const now = new Date();
  const totalMs =
    now.getHours() * 3600000 + now.getMinutes() * 60000 + now.getSeconds() * 1000 + now.getMilliseconds();

  // Calculate how far we are into the current decimal second
  const msIntoDecimalSecond = totalMs % DECIMAL_TIME_CONSTANTS.DECIMAL_SECOND_MS;

  // Update if we're within 16ms of the next decimal second
  // 16ms is approximately one frame at 60fps
  return msIntoDecimalSecond > DECIMAL_TIME_CONSTANTS.DECIMAL_SECOND_MS - 16;
}

export function getElapsedPercentage(): string {
  const now = new Date();
  const secondsSinceMidnight =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds() / 1000;

  // Calculate the fraction of the day that has passed
  const fractionOfDay = secondsSinceMidnight / DECIMAL_TIME_CONSTANTS.TOTAL_SECONDS_IN_DAY;

  // Convert the fraction of the day into metric time
  const metricSecondsElapsed = fractionOfDay * DECIMAL_TIME_CONSTANTS.TOTAL_METRIC_SECONDS_IN_DAY;

  // Use Math.floor to prevent rounding up, consistent with calculateDecimalTime
  const percentage =
    Math.floor((metricSecondsElapsed / DECIMAL_TIME_CONSTANTS.TOTAL_METRIC_SECONDS_IN_DAY) * 100000) / 1000;
  return percentage.toFixed(3);
}
