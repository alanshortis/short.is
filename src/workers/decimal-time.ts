import type { Time } from '../shared-types';

type Subscriber = (time: Time) => void;

let decimalTimeWorker: Worker | null = null;
const subscribers = new Set<Subscriber>();

function ensureWorker(): void {
  if (decimalTimeWorker) return;
  decimalTimeWorker = new Worker(new URL('./decimal-clock.ts', import.meta.url), { type: 'module' });
  decimalTimeWorker.onmessage = (event: MessageEvent<Time>) => {
    for (const fn of subscribers) fn(event.data);
  };
}

export function subscribe(fn: Subscriber): () => void {
  subscribers.add(fn);
  ensureWorker();

  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && decimalTimeWorker) {
      decimalTimeWorker.terminate();
      decimalTimeWorker = null;
    }
  };
}
