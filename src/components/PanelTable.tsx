import React, { useCallback, useEffect, useState } from "react";
import { styled, themes } from "@storybook/theming";
import { transparentize, darken, lighten } from "polished";
import { Form, ObjectControl } from "@storybook/components";
import { EventName, EventPayload, OnEmitFn } from "../typings";

type TableRowProps = {
  name: EventName;
  payload: EventPayload;
  onEmit: OnEmitFn;
};

const Code = styled.div(({ theme }) => ({
  lineHeight: 1,
  padding: "3px 5px",
  borderRadius: 3,
  border:
    theme.base === "light"
      ? `1px solid ${theme.color.mediumlight}`
      : `1px solid ${theme.color.darker}`,
  backgroundColor:
    theme.base === "light" ? theme.color.lighter : theme.color.border,
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1,
  margin: 0,
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",
}));

export const Row: React.FC<TableRowProps> = ({ name, payload, onEmit }) => {
  const [value, setValue] = useState(payload);

  useEffect(() => {
    setValue(payload);
  }, [payload]);

  const onChange = useCallback((updated: EventPayload) => {
    setValue(updated);
    return updated;
  }, []);

  return (
    <tr>
      <td>
        <Code>{name}</Code>
      </td>
      <td>
        <ObjectControl
          theme={themes.dark}
          {...{ name: "", value }}
          onChange={onChange}
        ></ObjectControl>
      </td>
      <td>
        <Form.Button
          onClick={() => {
            onEmit({ name, payload: value });
          }}
        >
          Emit
        </Form.Button>
      </td>
    </tr>
  );
};

export const Table = styled.table(({ theme }) => ({
  "&&": {
    // Resets for cascading/system styles
    borderCollapse: "collapse",
    borderSpacing: 0,
    color: theme.color.defaultText,

    "td, th": {
      padding: 0,
      border: "none",
      verticalAlign: "top",
      textOverflow: "ellipsis",
    },
    // End Resets

    fontSize: theme.typography.size.s2 - 1,
    lineHeight: "20px",
    textAlign: "left",
    width: "100%",

    // Margin collapse
    marginTop: 0,
    marginBottom: 0,

    "thead th:first-of-type, td:first-of-type": {
      width: "25%",
    },

    "th:first-of-type, td:first-of-type": {
      paddingLeft: 20,
    },

    "th:nth-of-type(2), td:nth-of-type(2)": {
      // Description column
      width: "45%",
    },

    "th:last-of-type, td:last-of-type": {
      textAlign: "center",
      // Controls column
      width: "10%",
    },

    th: {
      color:
        theme.base === "light"
          ? transparentize(0.25, theme.color.defaultText)
          : transparentize(0.45, theme.color.defaultText),
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },

    td: {
      paddingTop: "10px",
      paddingBottom: "10px",

      "&:not(:first-of-type)": {
        paddingLeft: 15,
        paddingRight: 15,
      },

      "&:last-of-type": {
        paddingRight: 20,
      },
    },

    // Makes border alignment consistent w/other DocBlocks
    marginLeft: 0,
    marginRight: 0,

    tbody: {
      borderRadius: theme.appBorderRadius,

      // for safari only
      // CSS hack courtesy of https://stackoverflow.com/questions/16348489/is-there-a-css-hack-for-safari-only-not-chrome
      "@media not all and (min-resolution:.001dpcm)": {
        "@supports (-webkit-appearance:none)": {
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "transparent",
        },
      },

      tr: {
        background: "transparent",
        overflow: "hidden",
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor:
          theme.base === "light"
            ? darken(0.1, theme.background.content)
            : lighten(0.05, theme.background.content),
      },

      td: {
        background: theme.background.content,
      },
    },
    // End finicky table styling
  },
}));
