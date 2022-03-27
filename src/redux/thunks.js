import { getUsersFetch, getUserSuccess } from "../reducers/action";

export const getUserRequest = () => {
  return function (dispatch) {
    dispatch(getUsersFetch());

    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => dispatch(getUserSuccess(user)));
  };
};
