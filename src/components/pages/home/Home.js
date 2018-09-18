import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import GoogleReviews from './GoogleReviews/GoogleReviews.js'
import LandingCards from "./LandinCards/LandingCards";
import ribbonIcon from '../../../assets/icons/certificate-icon.svg'
import shieldIcon from '../../../assets/icons/guarantee-icon.svg'
import starIcon from '../../../assets/icons/quality-icon.svg'
import glassFix from '../../../assets/glass-fix.svg'
import landingPhoto from '../../../assets/images/landing-photo.jpg'

const landingCardsInfo = [
  {
    id: 'certificate',
    icon: ribbonIcon,
    title: 'Certified Technicians',
    text: 'All of our technicians are vastly experienced and certified by the Auto Glass Safety Council (AGSC).',
  },
  {
    id: 'quality',
    icon: shieldIcon,
    title: 'Guaranteed Quality',
    text: 'We work closely with our partners to provide the highest quality products and industry leading technology. '
  },
  {
    id: 'customer-service',
    icon: starIcon,
    title: 'Outstanding Service',
    text: 'We are perfectionists and take great pride in providing the best service and customer experience around.'
  }
]

const Home = () => (
  <div className='home'>
    <div className='entire-viewport'>
      <div className='photo'>
        <img src={landingPhoto} alt="404"/>
      </div>
      <div className='center-row'>
        <GoogleReviews/>
      </div>
    </div>
    <hr/>
    <div className='center-row'>
      <LandingCards info={landingCardsInfo}/>
    </div>
    <div className='bottom-cta'>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='bottom-cta-img'>
        <img src={glassFix} alt="404"/>
      </div>
      <br/>
      <br/>
      <h5>Just fill out our easy form and our professionals will  handle the rest.</h5>
      <br/>
      <nav className='dropdown-button'>
        <Link to='/claim' className='trufit-button'>Get Started</Link>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  </div>
)

export default Home