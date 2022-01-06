import * as React from "react";
// import PropTypes from "prop-types";
import { styled, css } from "@storybook/theming";
import bus from "../utils/bus";
// import bus from "../utils/bus";

const useState = React.useState;
const useEffect = React.useEffect;

const Wrapper = styled.div`
  overflow: hidden;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #374151;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  ${(props) => {
    switch (props.type) {
      case "success":
        return css`
          background-color: #a7f3d0;
        `;
      case "error":
        return css`
          background-color: #fecaca;
        `;
      case "warning":
        return css`
          background-color: #fde68a;
        `;
    }
  }}
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  ${(props) => {
    switch (props.type) {
      case "success":
        return css`
          color: #047857;
        `;
      case "error":
        return css`
          color: #b91c1c;
        `;
      case "warning":
        return css`
          color: #f59e0b;
        `;
      default:
        return css`
          color: #374151;
        `;
    }
  }}
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-top: 0.75rem;
`;

const SuccessIcon = () => (
  <svg width="1rem" height="1rem" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const WarningIcon = () => (
  <svg width="1rem" height="1rem" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg width="1rem" height="1rem" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg width="1rem" height="1rem" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const Notification = ({ type, message }) => {
  const renderNotificationIcon = React.useCallback(() => {
    switch (type) {
      case "success":
        return (
          <IconWrapper type="success">
            <SuccessIcon />
          </IconWrapper>
        );
      case "warning":
        return (
          <IconWrapper type="warning">
            <WarningIcon />
          </IconWrapper>
        );
      case "error":
        return (
          <IconWrapper type="error">
            <ErrorIcon />
          </IconWrapper>
        );
    }
  });

  return (
    <Wrapper {...{ type }}>
      {renderNotificationIcon()}
      <div>{message}</div>
      <IconWrapper>
        <XIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    bus.on("notification.add", (payload) => {
      setNotifications([...notifications, payload]);
    });
  }, []);

  return (
    <List>
      {notifications.map((notification, index) => (
        <ListItem>
          <Notification key={`notification-${index}`} {...notification} />
        </ListItem>
      ))}
    </List>
  );
};

Notifications.propTypes = {};

Notifications.defaultProps = {};
