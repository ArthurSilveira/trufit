import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className='center-row'>
    <div className='section-wrapper'>
      <div className='section-title animated bounceInLeft'>Get in touch</div>
      <div className='section-subtitle'> Just fill out this quick form and we will take care of the rest!</div>
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
  </div>
)

export default Contact