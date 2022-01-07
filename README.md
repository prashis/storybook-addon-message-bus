# Storybook Addon Message Bus

Storybook Addon w/ GUI for interacting with Message Bus 🚎

![storybook-addon-message-bus-demo](https://user-images.githubusercontent.com/73868961/148539472-1942326a-2760-4bf3-a157-e5a815ba0684.gif)

## Installation

```sh
npm i -D @prashis/storybook-addon-message-bus
```

Then add the following to [`.storybook/main.js`](https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project):

```js
module.exports = {
  addons: ["@prashis/storybook-addon-message-bus"],
};
```

## Usage

Add an decorator in `.storybook/preview.js` (or individual stories) & pass the emitter callback function for emitting events

```ts
import { withMessageBus } from "@prashis/storybook-addon-message-bus";
import nanobus from "nanobus";

const bus = nanobus();

const emitter = (name, payload) => {
  bus.emit(name, payload);
};

export const decorators = [withMessageBus({ emitter })];
```

Finally, pass the list of event names & default payload in [story parameters](https://storybook.js.org/docs/react/addons/addons-api#useparameter), which will be displayed inside the addon panel

```ts
const events = [
  {
    name: "notification.add",
    payload: {
      type: "success",
      message: "Illo et aspernatur saepe exercitationem fugit tenetur.",
    },
  },
];

const Template = () => <Notifications />;

export const List = Template.bind({});
List.parameters = { events };
```
