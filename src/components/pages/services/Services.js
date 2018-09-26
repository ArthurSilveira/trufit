import React from 'react'
import './Services.css'
import servicesPhoto from '../../../assets/images/tf-photo-services.jpg'
import servicesPhoto2 from '../../../assets/images/tf-photo-services-2.jpg'

const Services = () => (
  <div className='center-row'>
    <div className='section-wrapper services-wrapper'>
      <div className='section-title animated bounceInLeft'>What we do</div>
      <div className='services-content'>
        <div className='services-left-side'>
          <div className='section-subtitle'>TruFit AutoGlass Works for YOU</div>
          <p>
            Let us make your repair process EASY.  Text, call, or email us to schedule your appointment- we’ll take care of it.
            Not sure if you need a repair or replacement?  Text or email us a picture of the damage.
            We work with your insurance company to make your repair or replacement seamless and stress free.
            Our mobile service will meet you anywhere that is convenient for you to complete your repair, FAST.
          </p>
          <div className='section-subtitle'>Insurance</div>
          <p>
            TruFit AutoGlass is an approved and preferred provider of windshield repair and replacement services for all major insurance companies.
            TruFit AutoGlass will work with your insurance agency to get your repairs scheduled and completed quickly.
            We’ll also help manage your auto glass insurance claim, taking care of the billing and account details with your insurance agent.
            <br/><br/>
            If your repair or replacement is not covered by your insurance policy, TruFit AutoGlass will work with you to get your vehicle serviced affordably.
          </p>
        </div>
        <div className='services-right-side'>
          <div className='services-image'>
            <img src={servicesPhoto} alt="404"/>
          </div>
          <div className='services-info'>
            <span className='services-phone-number'><a href="tel:5026670182">(502)667-0182</a></span>
            <span className='services-email'><a href="mailto:info@trufitautoglass.com">info@trufitautoglass.com</a></span>
            <span className='section-subtitle'>Text or call us to schedule your appointment</span>
          </div>
        </div>
      </div>
      <div className='services-content'>
        <div className='services-left-side'>
          <div className='services-image'>
            <img src={servicesPhoto2} alt="404"/>
          </div>
        </div>
        <div className='services-right-side'>
          <div className='section-subtitle'>Lifetime Warranty</div>
          <p>
            TruFit AutoGlass offers a guaranteed lifetime warranty on every replacement glass installation we complete,
            which covers our work for as long as you own the vehicle.
          </p>
          <div className='section-subtitle'>Same or Next Day Service</div>
          <p>
            Do you need your windshield replaced right away?  Most replacement or repair services can be performed within 1 to 2 business days from when you contact us.
            Many times we can even take care of you on the day you contact us if needed.
            We can service your vehicle wherever it’s most convenient for you, just let us know where to meet you.
            Whether you need it fixed while you’re at work or watching your kids at football practice, we can take care of you FAST.
          </p>
          <div className='section-subtitle'>Quality Guaranteed</div>
          <p>
            TruFit AutoGlass uses only the highest quality replacement products.
            Every TruFit AutoGlass technician is professionally trained and certified <a href="https://agsc.org/">(Auto Glass Safety Council certified)</a> in the latest installation and repair procedures,
            so you can rest assured that your auto glass will be as good as new.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Services