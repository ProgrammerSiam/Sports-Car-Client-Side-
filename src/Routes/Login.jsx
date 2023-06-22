import React, { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import "./Style/login.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import app from "../Features/Config/firebase.config";
import { AuthContext } from "./../Features/Auth/AuthProvider";
import { Link } from "react-router-dom";

export default function Login() {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const auth = getAuth(app);

  // if ( !email && !password) {
  //   setErr("Fill the all details!");
  // }  else if (!email) {
  //   setErr("Enter your right email!");
  // } else if (!password) {
  //   setErr("Enter your right password!");
  // }

  const login = () => {
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setData(user);
        toast("Login Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
          toast("Login Successful");
      })
      .catch((err) => console.log(err));
  };

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(FaEye);
    } else {
      setType("password");
      setIcon(FaEyeSlash);
    }
  };

  return (
    <section className="login">
      <div className="form">
        <h3>login</h3>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="enter your email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={type}
          placeholder="enter your password"
        />

        <div>
          <p onClick={handleToggle} className="pass">
            {icon}
          </p>
        </div>

        {/* <div className="form-control">
          <label>
            <span>Remember me</span>
            <input type="checkbox" />
          </label>

          <span onClick={handleResetPassword}>reset your password</span>
        </div> */}
        <p>
          Already have an account? <Link to="/register">register here</Link>
        </p>

        <button className="button" onClick={login}>
          login
        </button>

        <div className="google">
          <h4>Google Sign-in</h4>
          <span className="icon" onClick={handleGoogleLogin}>
            <FaGoogle />
          </span>
        </div>

        {/* {data ? (
          <button className="button" onClick={logout}>
            log out
          </button>
        ) : (
          <button className="button" onClick={login}>
            login
          </button>
        )}
    
        <h1>{data.email}</h1> */}
      </div>
    </section>
  );
}
