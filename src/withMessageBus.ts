import { makeDecorator, useChannel } from "@storybook/addons";
import { EVENTS } from "./constants";
import type { PreDecoratorOptions, OnEmitArg } from "./typings";

export const withMessageBus = ({ emitter }: PreDecoratorOptions) =>
  makeDecorator({
    name: "storybook-addon-decorator",
    parameterName: "events",
    wrapper: (storyFn, context) => {
      const _ = useChannel({
        [EVENTS.EMIT]: ({ name, payload }: OnEmitArg) => {
          emitter(name, payload);
        },
      });
      return storyFn(context);
    },
  });
