import React from "react";
import addons from "@storybook/addons";
import CoreEvents from "@storybook/core-events";
import { EVENTS } from "./constants";
import type { Event, Emit, OnEmitEvent } from "./typings";

interface Options {
  children?: React.ReactNode;
  emit: Emit;
  events: Event[];
}

let prevEvents: Event[];
let currentEmit: Emit;

const onEmit = (event: OnEmitEvent) => {
  console.log(event);
  
  currentEmit(event.name, event.payload);
};

const subscription = () => {
  const channel = addons.getChannel();
  channel.on(EVENTS.EMIT, onEmit);
  return () => {
    prevEvents = null;
    addons.getChannel().emit(EVENTS.ADD, []);
    channel.removeListener(EVENTS.EMIT, onEmit);
  };
};

const addEvents = ({ emit, events }: Options) => {
  if (prevEvents !== events) {
    addons.getChannel().emit(EVENTS.ADD, events);
    prevEvents = events;
  }
  currentEmit = emit;
  addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscription);
};

export default (options: Options) => {
  return (storyFn: () => React.ReactNode) => {
    addEvents(options);
    return storyFn();
  };
};

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
