import type { Time } from '../shared-types';

const TOTAL_SECONDS_IN_DAY = 24 * 60 * 60;
const TOTAL_METRIC_SECONDS_IN_DAY = 10 * 100 * 100;
const DECIMAL_SECOND_MS = 864;

function getTime(): Time {
  const now = new Date();
  const secondsSinceMidnight =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds() / 1000;

  const fractionOfDay = secondsSinceMidnight / TOTAL_SECONDS_IN_DAY;
  const metricSecondsElapsed = fractionOfDay * TOTAL_METRIC_SECONDS_IN_DAY;

  const hours = Math.floor(metricSecondsElapsed / 10_000);
  const minutes = Math.floor((metricSecondsElapsed % 10_000) / 100);
  const seconds = Math.floor(metricSecondsElapsed % 100);

  return {
    hours,
    minutes,
    seconds,
  };
}

postMessage(getTime());

setInterval(() => {
  postMessage(getTime());
}, DECIMAL_SECOND_MS);
