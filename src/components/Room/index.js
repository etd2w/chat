import React from "react";
import styled from "styled-components";
// import { formatDistanceToNow } from "date-fns";
import { color } from "../../styles/global";

import Avatar from "../Avatar";

const RoomStyled = styled.li`
  display: flex;
  padding: 0.375rem 0.75rem;
  cursor: pointer;

  &:hover {
    background: ${color.light};
  }

  .room__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.75rem;
    min-width: 17rem;
    width: 100%;
  }

  .room__header {
    display: flex;
    justify-content: space-between;
  }

  .room__username {
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }

  .room__timestamp {
    font-size: 0.75rem;
    color: ${color.muted};
  }

  .room__text {
    font-size: 0.75rem;
    margin-top: 0.4rem;
    max-width: 17rem;
    color: ${color.muted};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Room = ({ src, username, timestamp, message, isCompact }) => {
  return (
    <RoomStyled>
      <Avatar src={src} username={username} />

      {isCompact ? (
        ""
      ) : (
        <div className="room__content">
          <div className="room__header">
            <span className="room__username">{username}</span>
            <time className="room__timestamp">{timestamp}</time>
          </div>
          <div className="room__body">
            <div className="room__text">{message}</div>
          </div>
        </div>
      )}
    </RoomStyled>
  );
};

export default Room;
