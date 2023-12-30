import { React,useState,useContext  } from 'react'
import { UserContext } from '../api/context';
import "./style.css"
import { 
  collection, 
  query,
  where,
  getDocs, 
  doc,
  getDoc
} from "firebase/firestore"; 
import {db,auth} from "../api/firebase"
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCallback } from 'react';



export default function HomeCard() {
  const [user, loading, error] = useAuthState(auth);
  const [results, setResults] = useState({});
  const fetchResult = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setResults(data);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  }, [user?.uid]);
  useEffect(()=>{
    fetchResult();
  },[fetchResult])
  return (
    <div className="home-card">
    <div className="title">
    <h2>Result</h2>
    </div>
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Course code</th>
        <th scope="col">Course Name</th>
        <th scope="col">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Data Structures and Algorithm I</td>
        <td>{results['Data Structures and Algorithm I']}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Digital Design</td>
        <td>{results['Digital Design']}</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
    <th scope="row">5</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
    </tbody>
  </table>
    </div>
  )
}
