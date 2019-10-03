import React from "react";
import classNames from "classnames";
import { formatDistanceToNow } from "date-fns";

import "./Message.scss";

const Message = ({ avatar, user, text, media, timestamp, isMe }) => {
  const messageClass = classNames({
    message: true,
    "message--reverse": isMe
  });

  return (
    <div className={messageClass}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.name}'s avatar`} />
      </div>

      <div className="message__bubble">
        <div className="message__header">
          <span className="message__username">{user.name}</span>
          <time className="message__timestamp">
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </time>
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
    </div>
  );
};

export default Message;
