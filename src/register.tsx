import React from "react";
import { addons, types } from "@storybook/addons";
import { ControlPanel } from "./Panel";
import { ADDON_ID, PANEL_ID } from "./constants";
import type { Addon } from "@storybook/addons";
import type { API } from "@storybook/api";

const eventsAddon = (api: API): Addon => ({
  type: types.PANEL,
  title: "Message Bus",
  match: ({ viewMode }) => viewMode === "story",
  render: ({ active, key }) => <ControlPanel {...{ key, active, api }} />,
});

// Register the addon w/ panel
addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, eventsAddon(api));
});
