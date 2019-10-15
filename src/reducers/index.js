import { combineReducers } from "redux";

const initialRooms = {
  rooms: []
};

const rooms = (state = initialRooms, action) => {
  switch (action.type) {
    case "FETCH_ROOMS":
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ rooms });

export default rootReducer;
