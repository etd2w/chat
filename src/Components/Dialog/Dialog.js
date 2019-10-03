import React from "react";
import { formatDistanceToNow } from "date-fns";

import "./Dialog.scss";

const Dialog = ({ avatar, user, timestamp }) => {
  return (
    <div className="dialog">
      <div className="dialog__avatar">
        <img
          src="https://cdn.discordapp.com/avatars/488258091075502090/34622ddb0e1b13fa2703e995523711ec.png?size=128"
          alt="avatar"
        ></img>
      </div>

      <div className="dialog__content">
        <div className="dialog__header">
          <span className="dialog__username">This is Patrick</span>
          <time className="dialog__timestamp">Yesterday at 3:40 AM</time>
        </div>
        <div className="dialog__body">
          <div className="dialog__text">
            if you stopped talking so pretentiously i might be able to take you
            seriously
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
