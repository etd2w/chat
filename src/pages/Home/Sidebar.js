import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { color } from "../../styles/global";
import { ArrowToLeft } from "../../components/Icons";

import Room from "../../components/Room/";

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
  const state = useSelector(state => state.rooms);
  const dispatch = useDispatch();
  const [Rooms, value, handleChange, changeSizeOfRooms] = useSearch(
    state.rooms
  );

  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then(response => response.json())
      .then(posts => dispatch({ type: "FETCH_ROOMS", payload: posts }));
  }, [dispatch]);
  console.log(Rooms);

  return (
    <SidebarStyled>
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
            changeSizeOfRooms();
          }}
        >
          <ArrowToLeft />
        </button>
      </div>
      <ul className="listOfDialogs">
        {Rooms.map((dialog, id) => (
          <Room
            key={id}
            src={dialog.src}
            username={dialog.username}
            timestamp={dialog.timestamp}
            message={dialog.message}
            isCompact={dialog.isCompact}
          />
        ))}

        {/* 

        <Room
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
