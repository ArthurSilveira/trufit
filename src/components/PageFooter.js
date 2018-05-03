import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar.js'
import { SocialIcons } from 'react-social-icons'
import './styles/PageFooter.css'
import map from '../assets/map.svg'
import { Link } from 'react-router-dom'

const socialUrls = [
  'http://twitter.com/Arthur_tweets_',
  'http://facebook.com/arthur.s.silveira',
  'http://www.instagram.com/_aartvark_/'
]

const navItems = ['home', 'about', 'contact', 'file a claim']

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
              <p>Lorem ipsum blah blah blah. Some catchy mission
                statement. blah blah blah. Ooooo Cool, yeah blah
                blag de blah.blah blah. Ooooo Cool, yeah blah
              </p>
            </div>
          </div>

          <div className='nav-container'>
            <Link to='/'>
              <h3>TruFit</h3>
            </Link>
            <Navbar menuItems={navItems}/>
          </div>

          <div className='location-container'>
            <div className='map-container'>
              <img src={map}/>
            </div>
            <div className='address-container'>
              <span>112 Carriage Lane</span>
              <span> Midway, KY USA</span>
              <span>(502)667-0182</span>
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