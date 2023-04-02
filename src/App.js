import { useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch , useSelector } from "react-redux";
import { setToken } from "./utils/homeSlice";

function App() {
  const dispatch = useDispatch();
  var {token} = useSelector(state=>state.home);

  useEffect(()=>{
       const hash = window.location.hash ;
       
       if(hash){
        const tokenString  = hash.substring(1).split("&")[0].split("=")[1];
          dispatch(setToken(tokenString));
          console.log(tokenString);
       }
       window.location.hash = "";
       
  },[dispatch,token]);
  
  return (
    <div className="App">
       {(token?<Home/> : <Login/>)}
    </div>
  );
}

export default App;