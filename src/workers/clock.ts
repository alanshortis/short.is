import type { Time } from '../shared-types';

function getTime(): Time {
  const now = new Date();

  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    dayOfMonth: String(now.getDate()).padStart(2, '0'),
  };
}

postMessage(getTime());

setInterval(() => {
  postMessage(getTime());
}, 1000);
