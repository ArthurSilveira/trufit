import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar.js'
import { SocialIcons } from 'react-social-icons'
import './styles/PageFooter.css'
import map from '../assets/map.png'
import { Link } from 'react-router-dom'

const socialUrls = [
  'https://www.yelp.com/biz/trufit-autoglass-louisville-2',
  'https://www.facebook.com/TruFitAutoGlass/',
  'http://www.instagram.com/TruFitAutoGlass/',
  'https://goo.gl/maps/Y84LXuBhD752'
]

const navItems = ['about', 'services', 'coverage', 'contact']

class PageFooter extends Component {

  render() {
    return (
      <footer className='footer-container'>
        <div className='footer-inner'>
          <div className='brand-container'>
            <div className='footer-image'>
              <img src={this.props.footerLogo} alt=""/>
            </div>
            <div className='mission-container'>
              <p>
                TruFit AutoGlass is a full service repair and replacement company.
                From rock chip repairs to full windshield replacements,
                we are here to keep you safe and on the road.
              </p>
            </div>
          </div>

          <div className='nav-container'>
            <Link to='/'>
              <h3>TruFit</h3>
            </Link>
            <Navbar menuItems={navItems}/>
          </div>

          <div className='location-container show-for-medium'>
            <div className='map-container'>
              <a href="https://goo.gl/maps/awx2uaqi8862">
                <img src={map} alt='TRUFIT Autoglass'/>
              </a>
            </div>
            <div className='address-container'>
              <span>500 N English Station Rd</span>
              <span>Unit 103</span>
              <span> Louisville, KY 40223</span>
              <span><a href="tel:5026670182">(502)667-0182</a></span>
              <span><a href="mailto:info@trufitautoglass.com">info@trufitautoglass.com</a></span>
            </div>
          </div>

        </div>
        <div className='footer-under'>
          <div className='social-container'>
            <SocialIcons urls={socialUrls} color='white'/>
          </div>
          <div className='copyright'>
            2018 © TRUFIT Autoglass.
          </div>
        </div>
      </footer>
    )
  }
}


PageFooter.propTypes = {
  footerLogo: PropTypes.string.isRequired
}

PageFooter.defaultProps = {

}

export default PageFooter