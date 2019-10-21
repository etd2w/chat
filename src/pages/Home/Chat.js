import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { color } from "../../styles/global";
import { Paperclip, Smile, SendArrow } from "../../components/Icons";

import { fetchMessages } from "../../actions";
import Message from "../../components/Message/";

const ChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .header {
    padding: 0.75rem;
    border-bottom: 1px solid ${color.medium};
  }

  .title {
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }

  .conversation {
    flex-grow: 1;
    padding: 0.75rem;
    background: #f7fafc;
    overflow-y: scroll;
  }

  .textarea {
    display: flex;
    padding: 0.5rem;
    border-top: 1px solid ${color.medium};

    input {
      width: 100%;
      padding-left: 0.5rem;
      border: none;
      background: transparent;
      outline: none;
      color: inherit;
    }
  }
`;

const Chat = () => {
  const state = useSelector(state => state.messages);
  const selectedRoomId = useSelector(state => state.rooms.selectedRoom);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then(response => response.json())
      .then(messages => {
        const filtred = messages.filter(
          message => message.room_id === selectedRoomId
        );
        dispatch(fetchMessages(filtred));
      });
  }, [dispatch, selectedRoomId]);

  return (
    <ChatStyled>
      <div className="header">
        <span className="title">Regina Fisher</span>
      </div>

      <div className="conversation">
        {state.messages.length &&
          state.messages.map(message => (
            <Message
              key={message.id}
              src={message.user.src}
              username={message.user.name}
              timestamp={message.created_at}
              text={message.text}
              media={{
                images: []
              }}
              isMe={message.author_id === user.currentUserId ? true : false}
            />
          ))}
      </div>

      <div className="textarea">
        <button className="buttonWithIcon">
          <Paperclip />
        </button>
        <input type="text" placeholder="Write a message..." />
        <button className="buttonWithIcon">
          <Smile />
        </button>
        <button className="buttonWithIcon">
          <SendArrow />
        </button>
      </div>
    </ChatStyled>
  );
};

export default Chat;
