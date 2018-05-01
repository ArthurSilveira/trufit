import React, { Component } from 'react'
import Navbar from './Navbar.js'
import PropTypes from 'prop-types'
import './styles/PageHeader.css'

// const pages = [
//     { key: 'home', active: true, name: 'Home' },
//     { key: 'about', name: 'About'},
//     { key: 'claim', name: 'File a claim'}
// ]

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
          <div className={dropdownMenuClass}>
            <Navbar orientVertically={true} menuItems={this.props.menuItems} toggleDropdown={this.toggleDropdown.bind(this)}/>
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
      <header>
        <div className='head-container'>
          <div className='head-inner'>
            <h1 className='head-image'>
              <img src={this.props.headerLogo} alt="TRUFIT AUTOGLASS"/>
            </h1>

            { /* medium and large screens */ }
            <Navbar menuItems={this.props.menuItems}/>
            <nav className='head-nav show-for-medium'>
              <a className='head-button' href="">{this.props.buttonCopy}</a>
            </nav>
            <nav className='head-nav hide-for-medium'>
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