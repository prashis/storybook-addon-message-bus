import React from "react";
import { ResetWrapper } from "@storybook/components";
import { Row, Table } from "./PanelTable";
import { Event, OnEmitFn } from "../typings";

type PanelContentProps = {
  onEmit?: OnEmitFn;
  events?: Event[];
};

export const PanelContent: React.FC<PanelContentProps> = ({
  events,
  onEmit,
}) => {
  if (!events || !onEmit) {
    return <div>Missing the required `events` or `emit` parameter</div>;
  }

  return (
    <ResetWrapper>
      <Table aria-hidden={false}>
        <thead>
          <tr>
            <th>
              <span>Event</span>
            </th>
            <th>
              <span>Payload</span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map(({ name, payload }, index) => (
            <Row key={`message-bus-control-row-${index}`} {...{ name, payload, onEmit }} />
          ))}
        </tbody>
      </Table>
    </ResetWrapper>
  );
};
