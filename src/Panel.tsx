import React, { useEffect, useState } from "react";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { PanelContent } from "./components/PanelContent";
import { EVENTS } from "./constants";
import type { API } from "@storybook/api";
import type { Event, Emit, OnEmitEvent } from "./typings";

interface PanelProps {
  active: boolean;
  api: API;
}

export const ControlPanel: React.FC<PanelProps> = (props) => {
  const { active, api } = props;

  const [events, setEvents] = useState([]);

  const onAdd = (events: Event[]) => {
    setEvents(events);
  };

  const onEmit = (event: OnEmitEvent) => {
  console.log(event);

    api.emit(EVENTS.EMIT, event);
  };

  useEffect(() => {
    api.on(EVENTS.ADD, onAdd);
    return () => api.off(EVENTS.ADD, onAdd);
  }, []);

  return active ? (
    <AddonPanel {...props}>
      <PanelContent {...{ onEmit, events }} />
    </AddonPanel>
  ) : null;
};
