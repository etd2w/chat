import React from "react";
import styled from "styled-components";

import { color } from "../../styles/global";
import { Paperclip, Smile, SendArrow } from "../../components/Icons";

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
    background: #F7FAFC;
    /* background: ${color.bacground}; */
    overflow-y: scroll;
  }

  .textarea {
    display: flex;
    padding: 0.5rem;
    border-top: 1px solid ${color.medium};

    input {
      width: 100%;
      padding-left: .5rem;
      border: none;
      background: transparent;
      outline: none;
      color: inherit;
    }
  }
`;

const Chat = () => {
  return (
    <ChatStyled>
      <div className="header">
        <span className="title">Regina Fisher</span>
      </div>

      <div className="conversation">
        <Message
          src="https://i.imgur.com/4VHfwLy.png"
          username="Regina Fisher"
          timestamp="September 15, 3:11 PM"
          text="Unpopular opinion: you should write E2E/integration tests *first*, always.
            They should be directly related to business logic (user) requirements.
            Only when an E2E/integration test fails should you even think about writing unit tests.
            And be willing to delete those unit tests."
          media={{
            images: []
          }}
          isMe={false}
        />

        <Message
          src="https://i.imgur.com/5ljivmo.png"
          username="Randall Watson"
          timestamp="September 15, 3:11 PM"
          text="When we first started React Training, we had only one test for the whole website: make sure someone can buy a ticket. As long as that worked, everything else was negotiable 😅"
          media={{
            images: []
          }}
          isMe={true}
        />

        <Message
          src="https://i.imgur.com/4VHfwLy.png"
          username="Regina Fisher"
          timestamp="September 15, 3:11 PM"
          text="And that's all you need! No need to test how the sausage is made or how the soup turns into nuts."
          media={{
            images: []
          }}
          isMe={false}
        />

        <Message
          src="https://i.imgur.com/5ljivmo.png"
          username="Randall Watson"
          timestamp="September 15, 3:11 PM"
          text="¯\_(ツ)_/¯ i highly disagree - unit tests come first. You can more easily and more robustly test 99.99% of your app writing unit tests. Integration test failures mean you failed at proper unit testing."
          media={{
            images: []
          }}
          isMe={true}
        />

        <Message
          src="https://i.imgur.com/4VHfwLy.png"
          username="Regina Fisher"
          timestamp="September 15, 3:11 PM"
          text="What does testing 99.99% of your app mean, though? Code coverage? The purpose of your app is to fulfill requirements. Those requirements are seldom fully expressed in any individual unit test.I can write an app with 1000 passing unit tests that fails to meet requirements."
          media={{
            images: []
          }}
          isMe={false}
        />
        <Message
          src="https://i.imgur.com/4VHfwLy.png"
          username="Regina Fisher"
          timestamp="September 15, 3:11 PM"
          text="What does testing 99.99% of your app mean, though? Code coverage? The purpose of your app is to fulfill requirements. Those requirements are seldom fully expressed in any individual unit test.I can write an app with 1000 passing unit tests that fails to meet requirements."
          media={{
            images: []
          }}
          isMe={false}
        />
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
