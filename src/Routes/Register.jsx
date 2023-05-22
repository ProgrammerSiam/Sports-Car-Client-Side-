import React, { useContext } from "react";
import { useState } from "react";
import "./Style/register.css";
import app from "../Features/Config/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "./../Features/Auth/AuthProvider";

export default function Register() {
  const { createUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth(app);

  //register
  const submit = () => {
    setError("");
    setSuccess("");

    if (!name && !email && !password) {
      setErr("Fill the all details!");
    } else if (!name) {
      setErr("Enter your name!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    } else {
      //context see this
      createUser(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess("User has been created successfully");
          userProfile(user, name);
          console.log(user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  //update user profile => name,photo
  const userProfile = (user, name) => {
    updateProfile(user, {
      displayName: name,
      // photoURL: "https://www.w3schools.com/w3images/avatar2.png",
    })
      .then(() => {
        console.log("name updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="register">
      <div className="form">
        <h3>register your account</h3>

        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="enter your name"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="enter your email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="enter your password"
        />
        <p>
          Already have an account? <Link to="/login">login here</Link>
        </p>
        <p>{err}</p>
        <p>{error}</p>
        <p>{success}</p>

        <button className="button" onClick={submit}>
          submit
        </button>
      </div>
    </section>
  );
}
