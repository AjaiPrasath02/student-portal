import { React,useState,useContext  } from 'react'
import { UserContext } from '../api/context';
import "./style.css"
import { 
  collection, 
  query,
  where,
  getDocs, 
  doc,
  getDoc,
  orderBy
} from "firebase/firestore"; 
import {db,auth} from "../api/firebase"
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";



export default function RankList() {
  const [user, loading, error] = useAuthState(auth);
  const [rankList, setRankList] = useState([]);
  const fetchPost = async () => {
    try {
      const q = query(collection(db, "users"), orderBy("GPA","desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const rankListData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
        setRankList(rankListData);
        console.log(rankListData);
    });
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }
  useEffect(()=>{
    fetchPost();
  },[])
  return (<>


    <div class="rank-card ">
    <div className="title">
    <h2>Rank List</h2>
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
    {rankList.map((key,index) => (
        <tr>
        <th scope="row">{index+1}</th>
        <td>{key["Register No"]}</td>
        <td>{key["Name"]}</td>
        <td>{key["GPA"]}</td>
      </tr>    ))}
    </tbody>
  </table>
    </div>
    </>

  )
}
