import type { DecimalTime } from '../shared-types';

type Subscriber = (time: DecimalTime) => void;

let worker: Worker | null = null;
const subscribers = new Set<Subscriber>();

function ensureWorker(): void {
  if (worker) return;
  worker = new Worker(new URL('/src/workers/decimal-clock.ts', import.meta.url));
  worker.onmessage = (event: MessageEvent<DecimalTime>) => {
    for (const fn of subscribers) fn(event.data);
  };
}

export function subscribe(fn: Subscriber): () => void {
  subscribers.add(fn);
  ensureWorker();

  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && worker) {
      worker.terminate();
      worker = null;
    }
  };
}
