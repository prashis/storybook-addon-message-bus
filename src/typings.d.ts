declare module "global";

export type Emit = (event: string, payload: unknown) => void;

export type Event = {
  name: string;
  description?: string;
  payload: unknown;
};

export type OnEmitEvent = {
  name: string;
  payload: unknown;
};
