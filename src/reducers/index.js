import { combineReducers } from "redux";

const initialRooms = {
  rooms: [],
  selectedRoom: null
};

const rooms = (state = initialRooms, action) => {
  switch (action.type) {
    case "FETCH_ROOMS":
      return {
        ...state,
        rooms: action.payload
      };
    case "SET_ROOM_ID":
      return {
        ...state,
        selectedRoom: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ rooms });

export default rootReducer;
