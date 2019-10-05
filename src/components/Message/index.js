import React from "react";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";

import { color } from "../../styles/global";

import Avatar from "../Avatar";

const MessageStyled = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMe ? "row-reverse" : "row")};

  &:not(:last-child) {
    margin-bottom: 0.375rem;
  }

  .message__bubble {
    margin: 0 0.75rem;
    padding: 0.75rem;
    border-radius: 6px;
    max-width: 27rem;
    background: ${props => (props.isMe ? "#EFFDDE" : "white")};
    box-shadow: ${props =>
      props.isMe
        ? `0px 2px 0px ${color.shadowSecondary};`
        : `0px 2px 0px ${color.shadowPrimary};`};
  }

  .message__header {
    display: flex;
    justify-content: space-between;
  }

  .message__username {
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: ${props => (props.isMe ? color.secondary : color.primary)};
  }

  .message__timestamp {
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: ${color.muted};
  }

  .message__body {
    margin-top: 0.375rem;
  }

  .message__text {
    font-size: 0.75rem;
    letter-spacing: 0.04em;
  }
`;

const Message = ({ src, username, timestamp, text, media, isMe }) => {
  return (
    <MessageStyled isMe={isMe}>
      <Avatar src={src} username={username} size="small" />

      <div className="message__bubble">
        <div className="message__header">
          <span className="message__username">{username}</span>
          <time className="message__timestamp">{timestamp}</time>
        </div>

        <div className="message__body">
          {media.images.map(img => (
            <div className="message__image">
              <img src={img} alt="attach" />
            </div>
          ))}
          <div className="message__text">{text}</div>
        </div>
      </div>
    </MessageStyled>
  );
};

export default Message;
