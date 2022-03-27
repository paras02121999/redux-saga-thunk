import "./App.css";
import { getUserRequest } from "./redux/thunks";
import { getUsersFetch } from "./reducers/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.firstReducer.users);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => dispatch(getUserRequest())}>Get User</button>
      {/* <button onClick={() => dispatch(getUsersFetch())}>Get User</button> */}
      <div>
        {users &&
          users.map((user, i) => {
            return <p key={i}>{user.name}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
