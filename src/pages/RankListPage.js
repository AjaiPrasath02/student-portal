import React from 'react'
import NavBar from './../components/NavBar';
import HomeCard from '../components/HomeCard';
import RankList from './../components/RankList';

export default function RankListPage() {
  return (
    <div>
    <NavBar />
      <div className="container">
      <RankList/>
      </div>
    </div>
  )
}
