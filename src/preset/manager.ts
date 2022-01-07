import { addons, types } from "@storybook/addons";
import { Panel } from "../Panel";
import { ADDON_ID, PANEL_ID } from "../constants";
import type { Addon } from "@storybook/addons";

const eventsAddon: Addon = {
  type: types.PANEL,
  title: "Message Bus",
  match: ({ viewMode }) => viewMode === "story",
  render: Panel,
};

// Register the addon w/ panel
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, eventsAddon);
});
