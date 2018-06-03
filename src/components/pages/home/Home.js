import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import GoogleReviews from './GoogleReviews/GoogleReviews.js'
import LandingCards from "./LandinCards/LandingCards";

const Home = () => (
  <div className='home'>
    <GoogleReviews/>
    <div className='photo'>
      <img src="https://www.aaa.com/AAA/common/AAR/images/ws.jpg" alt="404"/>
    </div>
    <hr/>
    <LandingCards/>
    <hr/>
    <div className='bottom-cta'>
      <br/>
      <br/>
      <h4>Just fill out one quick form and we'll come to you and take care of the rest.</h4>
      <br/>
      <br/>
      <nav className='dropdown-button'>
        <Link to='/claim' className='trufit-button'>File a Claim</Link>
      </nav>
      <br/>
      <br/>
      <br/>
    </div>
    <hr/>
    <br/>
    <br/>
    <br/>
  </div>
)

export default Home