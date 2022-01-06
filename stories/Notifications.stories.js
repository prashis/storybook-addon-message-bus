import React from "react";
import { Notifications } from "./Notifications";
import withMessageBus from "../src/index";
import bus from "../utils/bus";

const events = [
  {
    name: "notification.add",
    payload: {
      type: "success",
      message: "Illo et aspernatur saepe exercitationem fugit tenetur.",
    },
  },
];

// const emit = (event, payload) => {
//   console.log("\x1B[42m [🎯EVENT] ", event);
//   console.log("\x1B[42m [📦PAYLOAD] ", payload);
//   bus.emit(event, payload);
// };

export default {
  title: "Example/Notifications",
  decorators: [withMessageBus({ emit: bus.emit.bind(bus), events })],
  component: Notifications,
};

const Template = () => <Notifications />;

export const List = Template.bind({});
