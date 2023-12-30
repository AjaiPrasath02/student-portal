import React from "react";
import "./style.css";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import RankList from "./RankList";
export default function NavBar() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const signOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      return true;
    } catch (error) {
      return false;
    }
  };
  return (
    <div className="navbar">
      <p>Student Result</p>
      <div>
      {pathname === "/home" ? (
        <button className="btn btn-primary btn-sg mx-2" onClick={() => navigate("/rank")}>
          Rank List
        </button>
      ) : null}
      
      {pathname === "/rank" ? (
        <button className="btn btn-primary btn-sg mx-2" onClick={() => navigate("/home")}>
          Results
        </button>
      ) : null}
        <button className="btn btn-primary btn-sg mx-2" onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
