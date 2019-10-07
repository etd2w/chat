import React from "react";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";
import { color } from "../../styles/global";

import Avatar from "../Avatar";

const DialogStyled = styled.li`
  display: flex;
  padding: 0.375rem 0.75rem;
  cursor: pointer;

  &:hover {
    background: ${color.light};
  }

  .dialog__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.75rem;
    min-width: 17rem;
    width: 100%;
  }

  .dialog__header {
    display: flex;
    justify-content: space-between;
  }

  .dialog__username {
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }

  .dialog__timestamp {
    font-size: 0.75rem;
    color: ${color.muted};
  }

  .dialog__text {
    font-size: 0.75rem;
    margin-top: 0.4rem;
    max-width: 17rem;
    color: ${color.muted};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Dialog = ({ src, username, timestamp, message, isCompact }) => {
  return (
    <DialogStyled>
      <Avatar src={src} username={username} />

      {isCompact ? (
        ""
      ) : (
        <div className="dialog__content">
          <div className="dialog__header">
            <span className="dialog__username">{username}</span>
            <time className="dialog__timestamp">{timestamp}</time>
          </div>
          <div className="dialog__body">
            <div className="dialog__text">{message}</div>
          </div>
        </div>
      )}
    </DialogStyled>
  );
};

export default Dialog;
