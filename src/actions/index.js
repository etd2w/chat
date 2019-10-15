const FETCH_ROOMS = "FETCH_ROOMS";

export const fetchRooms = payload => {
  return {
    type: FETCH_ROOMS,
    payload
  };
};
