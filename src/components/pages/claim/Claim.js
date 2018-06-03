import React from 'react'
import './Claim.css'

const About = () => (
  <div className='section-wrapper animated bounceInLeft'>
    <div className='section-title'>Submit a claim</div>
    <div className='section-subtitle'></div>
    <div className='mid-section'>
      <form className='contact-form' name='contact-form' method='POST' action='/thanks' data-netlify='true' data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact-form' />
        <input type='hidden' name='bot-field'/>

        <input type='email' name='email' placeholder='Your email'/>
        <input type='subject' name='subject' placeholder='Subject'/>
        <textarea name='message' placeholder='How can I help you today?'/>
        <button type='submit'>send</button>
      </form>
    </div>
  </div>
)

export default About