import "./App.css";
import Login from "./Components/Login";
import UserDetails from "./Components/UserDetails";
import { RootState, AppDispatch } from './Store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const users = useSelector((state: RootState) => state.userData.userDetails);
  console.log(users)
  const isLogin = useSelector((state: RootState) => state.userData.isLogin);
  console.log("isLogin",isLogin)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
  <div className={`${isLogin ? "hidden" : "block"}`}>
        <Login />
      </div>
      <div className={`${isLogin ? "block" : "hidden"}`}>
        <UserDetails />
      </div>
    </>
  );
}

export default App;
