declare module "global";

export type EventName = string;
export type EventPayload = unknown;

export type Event = {
  name: EventName;
  description?: string;
  payload: EventPayload;
};

export type EmitterCallback = (event: EventName, payload: EventPayload) => void;

export type OnEmitArg = {
  name: EventName;
  payload: EventPayload;
};

export type OnEmitFn = (args: OnEmitArg) => void;

export type PreDecoratorOptions = {
  emitter: EmitterCallback;
  events: Event[];
};
