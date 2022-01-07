import React from "react";
import { Notifications } from "./Notifications.tsx";
import { withMessageBus } from "../src";
import { bus } from "../utils/bus";

const events = [
  {
    name: "notification.add",
    payload: {
      type: "success",
      message: "Illo et aspernatur saepe exercitationem fugit tenetur.",
    },
  },
];

const emitter = (name, payload) => {
  bus.emit(name, payload);
};

export default {
  title: "Example/Notifications",
  decorators: [withMessageBus({ emitter })],
  component: Notifications,
};

const Template = () => <Notifications />;

export const List = Template.bind({});
List.parameters = { events };
