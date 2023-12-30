import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./../api/firebase";
import { NavLink } from "react-router-dom";
import { addDoc,collection } from "firebase/firestore";
import {useAuthState}from "react-firebase-hooks/auth";
export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const onSubmit = async (email, password) => {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const collectionRef = collection(db, "users")
      const user = userCredential.user;
      const userData = {
        uid: user.uid,
        email: user.email
      }

      await addDoc(collectionRef,userData)
  };
  return (
    <div className="login-card form-group">
      <div>
        <h2>Student Result</h2>
      </div>
      <form>
        <div class="form-group">
          <label className="p-2" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e)=>{setEmail(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button className="btn btn-primary btn-lg" type="submit" onClick={()=>{onSubmit(email, password);navigate("/");}}>
            Signup
          </button>
        </div>
        <div>
        <p className="text-center">
        Already have an account?{' '}
        <NavLink to="/" >
            Sign in
        </NavLink>
        </p>    
        </div>
      </form>

    </div>
  );
}
