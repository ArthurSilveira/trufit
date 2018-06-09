import React from 'react'
import './About.css'
import kyMap from '../../../assets/ky-map.svg'
import PicSlider from './carousel/PicSlider'

const About = () => (
  <div>
    <div className='center-row'>
      <div className='section-wrapper'>
        <div className='section-title animated bounceInLeft'>About us</div>
        <div className='about-content'>
          <div className='content-info animated bounceInLeft'>
            <h4 className='content-tittle'>Locally Owned and Operated</h4>
            <p>
              TruFit Auto Glass is a full service repair and replacement company.
              From rock chip repairs to full windshield replacements, we are here to keep you safe and on the road.
            </p>
            <p>
              Ideally in here you would have some more stuff about your company. Maybe talk about how long you've been in business or something.
              And your values etc etc etc... Filler text Filler text Filler text Filler text Filler text Filler text. Filler text
              Filler text.
            </p>
          </div>
          <div className='content-image'>
            <img src={kyMap} alt="404"/>
          </div>
        </div>
      </div>
    </div>
    <div className='about-content colored'>
      <div className='center-row'>
        <PicSlider/>
        <div className='content-info'>
          <h4 className='content-tittle second'>Locally Owned and Operated</h4>
          <p>
            TruFit Auto Glass is a full service repair and replacement company.
            From rock chip repairs to full windshield replacements, we are here to keep you safe and on the road.
          </p>
          <p>
            Ideally in here you would have some more stuff about your company. Maybe talk about how long you've been in business or something.
            And your values etc etc etc... Filler text Filler text Filler text Filler text Filler text Filler text. Filler text
            Filler text.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default About