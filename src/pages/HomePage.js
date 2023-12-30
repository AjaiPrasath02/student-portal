import React from 'react'
import NavBar from './../components/NavBar';
import HomeCard from '../components/HomeCard';

export default function HomePage() {
  return (
    <div>
    <NavBar />
      <div className="container">
      <HomeCard/>
      </div>
    </div>
  )
}
