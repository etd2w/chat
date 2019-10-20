import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { color } from "../../styles/global";
import { ArrowToLeft } from "../../components/Icons";

import { fetchRooms } from "../../actions";

import Room from "../../components/Room/";

const SidebarStyled = styled.div`
  max-width: 23.25rem;
  border-right: 1px solid ${color.medium};

  .header {
    display: flex;
    padding: 0.75rem;
    justify-content: center;
    height: ${props => (props.isCompact ? "54px" : "")};
  }

  input {
    display: ${props => (props.isCompact ? "none" : "block")};
    border: none;
    background: ${color.light};
    padding: 0.375rem 0.75rem;
    width: 100%;
    border-radius: 6px;
    font-size: 0.75rem;
    margin-right: 0.75rem;
  }

  svg {
    transform: ${props => (props.isCompact ? "rotate(180deg)" : "")};
    transition: transform 0.2s ease-out;
  }
`;

const Sidebar = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [value, setValue] = useState("");
  const [filtredRooms, setfiltredRooms] = useState([]);
  const state = useSelector(state => state.rooms);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then(response => response.json())
      .then(rooms => dispatch(fetchRooms(rooms)));
  }, [dispatch]);

  const filterRooms = value => {
    const filtred = state.rooms.filter(dialog =>
      dialog.username.toLowerCase().includes(value.toLowerCase())
    );
    setfiltredRooms(filtred);
  };

  const handleChange = event => {
    setValue(event.target.value);
    filterRooms(event.target.value);
  };

  return (
    <SidebarStyled isCompact={isCompact}>
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
          onClick={() => setIsCompact(!isCompact)}
        >
          <ArrowToLeft />
        </button>
      </div>
      <ul className="listOfDialogs">
        {filtredRooms.length || value.length
          ? filtredRooms.map(room => (
              <Room
                key={room.id}
                src={room.src}
                username={room.username}
                timestamp={room.timestamp}
                message={room.message}
                isCompact={isCompact}
                id={room.id}
              />
            ))
          : state.rooms.map((room, id) => (
              <Room
                key={id}
                src={room.src}
                username={room.username}
                timestamp={room.timestamp}
                message={room.message}
                isCompact={isCompact}
                id={room.id}
              />
            ))}
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
