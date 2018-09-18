import React from 'react'
import './About.css'
import kyMap from '../../../assets/coverage-map.svg'
import PicSlider from './carousel/PicSlider'

const About = () => (
  <div>
    <div className='center-row'>
      <div className='section-wrapper'>
        <div className='section-title animated bounceInLeft'>Who we are</div>
        <div className='section-subtitle'>Locally owned and operated</div>
        <div className='about-content'>
          <div className='content-info'>
            <p>
              TruFit AutoGlass is a full service repair and replacement company.
              From rock chip repairs to full windshield replacements, we are here to keep you safe and on the road.
            </p>
            <p>
              As a locally owned and operated business, we take great pride in providing you with a great experience. Our goal is to
              make your high quality repair/replacement as easy and convenient as possible for you.
            </p>
            <p>
              From working with your insurance or working with you to get you the most affordable price, to meeting you wherever you need us to for your
              repair, TruFit AutoGlass is here to take care of you and all of your auto glass needs. Text, email, or call us today to
              schedule your appointment.
            </p>
          </div>
          <div className='content-image show-for-medium'>
            <img src={kyMap} alt="404"/>
          </div>
        </div>
      </div>
    </div>
    <div className='about-content colored'>
      <div className='center-row'>
        <PicSlider/>
      </div>
    </div>
  </div>
)

export default About