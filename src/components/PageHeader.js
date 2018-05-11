import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar.js'
import { Link } from 'react-router-dom'
import './styles/PageHeader.css'

class PageHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdown () {
    this.setState((prevState, props) => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  renderDropdown () {
    let menuState = this.state.dropdownOpen ? '' : 'hide';
    let dropdownMenuClass = this.state.dropdownOpen ? 'dropdown-menu-open' : 'dropdown-menu-close';
    return (
      <div className={`dropdown hide-for-medium ${menuState}`}>
        <div className='dropdown-mask'></div>
        <div className='dropdown-menu-container'>
          <div className={`${dropdownMenuClass}`}>
            <Navbar dropdownStyle={true} menuItems={this.props.menuItems} toggleDropdown={this.toggleDropdown.bind(this)}/>
            <nav className='dropdown-button'>
              <a className='trufit-button' href="">{this.props.buttonCopy}</a>
            </nav>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log('now the state is: ', this.state.dropdownOpen)
    let burgerButtonState = this.state.dropdownOpen? 'close' : 'open'
    return (
      <header className='animated'>
        <div className='head-container'>
          <div className='head-inner animated fadeInDownBig'>
            <Link to='/' onClick={this.toggleDropdown.bind(this)}>
              <h1 className='head-image'>
                <img src={this.props.headerLogo} alt="TRUFIT AUTOGLASS"/>
              </h1>
            </Link>
            { /* medium and large screens */ }
            <div className='nav-container show-for-medium'>
              <Navbar menuItems={this.props.menuItems}/>
            </div>
            <nav className='nav-component show-for-medium'>
              <a className='head-button' href="">{this.props.buttonCopy}</a>
            </nav>
            <nav className='nav-component hide-for-medium'>
              <a className='show-dropdown-button' onClick={this.toggleDropdown.bind(this)}>
                <span className={`burger-button ${burgerButtonState}`}></span>
              </a>
            </nav>
          </div>
        </div>

        { /* small screens */ }
        {this.renderDropdown()}
      </header>
    )
  }
}

PageHeader.propTypes = {
  headerLogo: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  buttonCopy: PropTypes.string.isRequired
}

PageHeader.defaultProps = {
  menuItems: ['home', 'about', 'contact'],
  buttonCopy: 'Hire Us'
}

export default PageHeader