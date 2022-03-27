import { call, put, takeEvery, throttle, debounce } from "redux-saga/effects";
import { GET_USERS_FATCH, getUserSuccess } from "../reducers/action";

function* workGetUser() {
  const response = yield call(
    fetch,
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = yield response.json();
  yield put(getUserSuccess(users));
}

function* sagas() {
  yield throttle("2000", GET_USERS_FATCH, workGetUser);
  // yield takeEvery(GET_USERS_FATCH, workGetUser);
}
export default sagas;
