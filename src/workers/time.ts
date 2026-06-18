import type { Time } from '../shared-types';

type Subscriber = (time: Time) => void;

let timeWorker: Worker | null = null;
const subscribers = new Set<Subscriber>();

function ensureWorker(): void {
  if (timeWorker) return;
  timeWorker = new Worker(new URL('/src/workers/clock.ts', import.meta.url));
  timeWorker.onmessage = (event: MessageEvent<Time>) => {
    for (const fn of subscribers) fn(event.data);
  };
}

export function subscribe(fn: Subscriber): () => void {
  subscribers.add(fn);
  ensureWorker();

  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && timeWorker) {
      timeWorker.terminate();
      timeWorker = null;
    }
  };
}
