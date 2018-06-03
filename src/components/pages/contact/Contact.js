import React from 'react'

const Contact = () => (
  <div className='section-wrapper animated bounceInLeft'>
    <div className='section-title'>Get in touch</div>
    <div className='section-subtittle'> Just fill out this quick form and we will get back to you as soon as possible.</div>
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

export default Contact