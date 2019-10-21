import { combineReducers } from "redux";

const initialState = {
  currentUserId: "48e4283e-65d0-4ad3-8ca1-3001ce8e48c8"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state
      };
    default:
      return state;
  }
};

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

const initialMessages = {
  messages: []
};

const messages = (state = initialMessages, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ user, rooms, messages });

export default rootReducer;
