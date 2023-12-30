import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./../api/firebase";
import { NavLink } from "react-router-dom";
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const onLogin = (e) => {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
    });    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}

  return (
    <div className="login-card form-group">
      <div>
        <h2>Student Result</h2>
      </div>
      <form
        onSubmit={() => {
          console.log("signIn");
          navigate("/home");
        }}
      >
        <div class="form-group">
          <label className="p-2" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label className="p-2" for="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button
            className="btn btn-primary btn-lg"
            type="submit"
            onClick={onLogin}
          >
            Signin
          </button>
        </div>
        <div>
          <p className="text-center">
          No account yet? {' '}
          <NavLink to="/signup">
              Sign up
          </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
