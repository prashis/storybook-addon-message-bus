import React from "react";
import { AddonPanel } from "@storybook/components";
import { useChannel, useParameter } from "@storybook/api";
import { PanelContent } from "./components/PanelContent";
import { EVENTS } from "./constants";
import { Event, OnEmitArg } from "./typings";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const events = useParameter<Event[]>("events", []);

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({});

  const onEmit = (event: OnEmitArg) => {
    emit(EVENTS.EMIT, event);
  };

  return props.active ? (
    <AddonPanel {...props}>
      <PanelContent {...{ onEmit, events }} />
    </AddonPanel>
  ) : null;
};
