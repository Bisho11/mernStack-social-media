import "./login.css";
import {useContext, useRef} from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress } from "@mui/material";
import {useNavigate} from "react-router";

export default function Login() {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const {user,isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = (e)=>{
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value },dispatch);
  };

  console.log(user)

  const toRegister = ()=>{
    navigate("/register");
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img className="logo" src="assets/tile.png" alt="" />
          {/* <h3 className="loginLogo">Skulga</h3> */}
          <span className="loginDesc">
            Connect with Souls and the world around you on Skulga.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input 
            placeholder="Email"  
            required
            className="loginInput" 
            ref={email} />
            <input 
            placeholder="Password" 
            type="password" 
            required
            className="loginInput" 
            ref={password} />
            <button className="loginButton">
              {isFetching ? <CircularProgress size="20px" style={{'color': 'DarkOrange'}}/> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" type="button" onClick={toRegister}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
