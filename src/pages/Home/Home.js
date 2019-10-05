import React from "react";
import styled from "styled-components";

import { color } from "../../styles/global";

import Dialog from "../../components/Dialog/";
import Input from "../../components/Input";
import Message from "../../components/Message/";

const HomeStyled = styled.div`
  display: flex;
  min-height: 100vh;

  .sidebar {
    min-width: 23.25rem;
    border-right: 1px solid ${color.medium};

    &__header {
      padding: 0.75rem;
    }
  }

  input {
    display: block;
    border: none;
    background: ${color.light};
    padding: 0.375rem 0.75rem;
    width: 100%;
    border-radius: 6px;
    font-size: 0.75rem;
  }

  .chat {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__header {
      padding: 0.75rem;
      border-bottom: 1px solid ${color.medium};
    }

    &__title {
      font-weight: 500;
      font-size: 0.75rem;
      letter-spacing: 1px;
    }

    &__content {
      padding: 0.75rem;
      background: ${color.bacground};
    }
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <div className="sidebar">
        <div className="sidebar__header">
          <input
            type="text"
            name="search"
            className="sidebar__search"
            placeholder="Search"
          />
        </div>

        <ul className="listOfDialogs">
          <Dialog
            src="https://i.imgur.com/Zixf9SO.png"
            username="Tanya Pena"
            timestamp="02.10.19"
            message="Sint elit est anim sit excepteur eiusmod quis"
          />

          <Dialog
            src="https://i.imgur.com/EJ8Dlmf.png"
            username="Francisco Russell"
            timestamp="30.05.18"
            message="Esse proident enim eu sunt ut ea consequat occ"
          />

          <Dialog
            src="https://i.imgur.com/oOnNkX9.png"
            username="Theresa Howard"
            timestamp="25.07.19"
            message="Ad proident esse aute pariatur excepteur ut Lorem"
          />

          <Dialog
            src="https://i.imgur.com/4VHfwLy.png"
            username="Regina Fisher"
            timestamp="14.08.19"
            message="Let me do it then I will share with everybody"
          />

          <Dialog
            src="https://i.imgur.com/4SAZjSB.png"
            username="Ricardo Flores"
            timestamp="13.03.18"
            message="Aute culpa voluptate amet cupidatat"
          />

          <Dialog
            src="https://i.imgur.com/9h5cZBE.png"
            username="Francisco Bell"
            timestamp="14.08.19"
            message="Consectetur pariatur excepteur elit nisi excepteur"
          />

          <Dialog
            src="https://i.imgur.com/oXuBAwH.png"
            username="Esther Jones"
            timestamp="14.08.19"
            message="Laborum aliquip proident enim irure eiusmod"
          />

          <Dialog
            src="https://i.imgur.com/gEcXtP1.png"
            username="Serenity Miles"
            timestamp="14.08.19"
            message="Labore officia tempor fugiat aute aliquip exercita"
          />

          <Dialog
            src="https://i.imgur.com/WcMKatY.png"
            username="Wendy Nguyen"
            timestamp="14.08.19"
            message="Culpa ad est aute et quis"
          />

          <Dialog
            src="https://i.imgur.com/Ut7CDUW.png"
            username="Annette Russell"
            timestamp="14.08.19"
            message="Mollit dolor laborum deserunt eu reprehenderit"
          />

          <Dialog
            src="https://i.imgur.com/VYdeJOb.png"
            username="Jerome Black"
            timestamp="14.08.19"
            message="Occaecat anim reprehenderit Lorem proident Lor"
          />

          <Dialog
            src="https://i.imgur.com/z0YAacA.png"
            username="Arthur Richards"
            timestamp="14.08.19"
            message="Consequat duis eiusmod est et consectetur con"
          />

          <Dialog
            src="https://i.imgur.com/aTfprKG.png"
            username="Soham Cooper"
            timestamp="14.08.19"
            message="Enim velit magna cupidatat sint laboris ex"
          />
        </ul>
      </div>

      <div className="chat">
        <div className="chat__header">
          <span className="chat__title">Regina Fisher</span>
        </div>

        <div className="chat__content">
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
        </div>

        <div className="chat__textarea">
          <input type="text" placeholder="Write a message..." />
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
