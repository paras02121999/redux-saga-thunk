export const GET_USERS_FATCH = "GET_USERS_FATCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsersFetch = () => ({
  type: GET_USERS_FATCH,
});

export const getUserSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  users,
});
