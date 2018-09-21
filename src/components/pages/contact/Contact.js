import React from 'react'
import './Contact.css'
import contactMap from '../../../assets/images/contact-map.png'

const Contact = () => (
  <div className='center-row'>
    <div className='section-wrapper contact-wrapper'>
      <div className='section-title animated bounceInLeft'>Get in touch</div>
      <div className='contact-split'>
        <div className='contact-left'>
          <div className='section-subtitle'> Just fill out this quick form and we will take care of the rest!</div>
          <form className='contact-form' name='contact-form' method='POST' action='/thanks' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact-form' />
            <input type='hidden' name='bot-field'/>

            <input type='email' name='email' placeholder='Your email'/>
            <input type='subject' name='subject' placeholder='Subject'/>
            <textarea name='message' placeholder='How can we help you today?'/>
            {/*<input type='file' name='subject' placeholder='Subject'/>*/}
            <div className='form-button-container'>
              <button className='trufit-button' type='submit'>send</button>
            </div>
          </form>
        </div>
        <div className='contact-right'>
          <div className='contact-map-container show-for-medium'>
            <img src={contactMap} alt="404"/>
          </div>
          <div className='services-info'>
            <span className='section-subtitle'>928 Willow Pointe Drive</span>
            <span className='section-subtitle'>Louisville, KY</span>
            <span className='services-phone-number'>(502)667-0182</span>
            <span className='services-email'>info@trufitautoglass.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact