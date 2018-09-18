import React from 'react'
import googleMapImage from '../../../assets/images/google-map-new.png'

const Coverage = () => (
  <div className='center-row'>
    <div className='section-wrapper'>
      <div className='section-title animated bounceInLeft'>Where we go</div>
      <div className='mid-section'>
        <p>
          TruFit AutoGlass is a locally owned and operated business based in Louisville, Kentucky. <br/>
          We are happy to travel to you if you are within a 100 mile radius of Louisville, Kentucky. <br/><br/>
          Not sure if you are in our service area? Call, text or email us your location.
        </p>
        <div className='coverage-image'>
          <img src={googleMapImage} alt="404"/>
        </div>
        <p>
          TruFit Autoglass is an approved and preferred provider of windshield repair and replacement services for all major insurance companies. <br/><br/>
          We will work with your insurance agency to get your repairs scheduled and completed quickly by helping manage your auto glass insurance claim
          and taking care of the billing and account details with your insurance agent.<br/><br/>
          If your repair or replacement is not covered by your insurance policy, TruFit AutoGlass will work with you to get your vehicle serviced affordably.
        </p>
      </div>
      <br/><br/><br/><br/>
    </div>
  </div>
)

export default Coverage