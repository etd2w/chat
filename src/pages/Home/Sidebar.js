import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../styles/global";
import { ArrowToLeft } from "../../components/Icons";

import Dialog from "../../components/Dialog/";

import { useSearch } from "../../hooks";

const SidebarStyled = styled.div`
  max-width: 23.25rem;
  border-right: 1px solid ${color.medium};

  .header {
    min-width: ${props => props.isSidebarOpen && "22.25rem"};
    display: flex;
    padding: 0.75rem;
    justify-content: center;
    height: ${props => (props.isSidebarOpen ? "" : "54px")};
  }

  input {
    display: ${props => (props.isSidebarOpen ? "block" : "none")};
    border: none;
    background: ${color.light};
    padding: 0.375rem 0.75rem;
    width: 100%;
    border-radius: 6px;
    font-size: 0.75rem;
    margin-right: 0.75rem;
  }

  svg {
    transform: ${props => (props.isSidebarOpen ? "" : "rotate(180deg)")};
    transition: transform 0.2s ease-out;
  }
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [dialogs, value, handleChange, changeSizeOfDialogs] = useSearch([
    {
      src: "https://i.imgur.com/EJ8Dlmf.png",
      username: "Francisco Russell",
      timestamp: "30.05.18",
      message: "Esse proident enim eu sunt ut ea consequat occ",
      isCompact: !isSidebarOpen
    },
    {
      src: "https://i.imgur.com/oOnNkX9.png",
      username: "Theresa Howard",
      timestamp: "25.07.19",
      message: "Ad proident esse aute pariatur excepteur ut Lorem",
      isCompact: !isSidebarOpen
    },
    {
      src: "https://i.imgur.com/4VHfwLy.png",
      username: "Regina Fisher",
      timestamp: "14.08.19",
      message: "Let me do it then I will share with everybody",
      isCompact: !isSidebarOpen
    },
    {
      src: "https://i.imgur.com/4SAZjSB.png",
      username: "Ricardo Flores",
      timestamp: "13.03.18",
      message: "Aute culpa voluptate amet cupidatat",
      isCompact: !isSidebarOpen
    },
    {
      src: "https://i.imgur.com/9h5cZBE.png",
      username: "Francisco Bell",
      timestamp: "14.08.19",
      message: "Consectetur pariatur excepteur elit nisi excepteur",
      isCompact: !isSidebarOpen
    },
    {
      src: "https://i.imgur.com/oXuBAwH.png",
      username: "Esther Jones",
      timestamp: "14.08.19",
      message: "Laborum aliquip proident enim irure eiusmod",
      isCompact: !isSidebarOpen
    }
  ]);

  return (
    <SidebarStyled isSidebarOpen={isSidebarOpen}>
      <div className="header">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        <button
          className="buttonWithIcon"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
            changeSizeOfDialogs();
          }}
        >
          <ArrowToLeft />
        </button>
      </div>
      <ul className="listOfDialogs">
        {dialogs.map((dialog, id) => (
          <Dialog
            key={id}
            src={dialog.src}
            username={dialog.username}
            timestamp={dialog.timestamp}
            message={dialog.message}
            isCompact={dialog.isCompact}
          />
        ))}

        {/* 

        <Dialog
          src="https://i.imgur.com/oXuBAwH.png"
          username="Esther Jones"
          timestamp="14.08.19"
          message="Laborum aliquip proident enim irure eiusmod"
          isCompact={!isSidebarOpen}
        /> */}
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
