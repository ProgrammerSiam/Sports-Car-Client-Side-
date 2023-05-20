import React, { useState, useRef, useContext } from "react";

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
  const { loginUser, singupUser } = useContext(AuthContext);
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
        // Signed in
        const user = userCredential.user;
        setData(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //sin

  const singup = () => {
    singupUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //show/hidden password
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(FaEye);
    } else {
      setType("password");
      setIcon(FaEyeSlash);
    }
  };

  // //reset password
  // const emailRef = useRef();

  // const handleResetPassword = () => {
  //   const email = emailRef.current.value;

  //   console.log(email);
  //   if (!email) {
  //     alert("plz provide your email address");
  //   }

  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       alert("check your email");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // //login/logout

  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setData("");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

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
          Already have an account? <Link to="/login">login here</Link>
        </p>

        <button className="button" onClick={login}>
          login
        </button>

        <div className="google">
          <h4>Google Sign-in</h4>
          <span className="icon" onClick={singup()}>
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
