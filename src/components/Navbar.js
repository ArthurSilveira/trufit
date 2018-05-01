import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import _ from 'lodash'

// const pages = [
//     { key: 'home', active: true, name: 'Home' },
//     { key: 'about', name: 'About'},
//     { key: 'claim', name: 'File a claim'}
// ]

class Navbar extends Component {


  renderMenuItems(menuItems) {
    return _.map(menuItems, (item, key) => {
      if (!this.props.orientVertically) {
        return (
          <Link to={`/${item}`} className="nav-item" key={key}>{item}</Link>
        )
      } else {
        return (
          <Link to={`/${item}`} className="dropdown-nav-item" key={key} onClick={this.props.toggleDropdown}>{item}</Link>
        )
      }

    })
  }

  render() {

    if (!this.props.orientVertically) {
      return (
        <nav className='head-nav show-for-medium'>
          {this.renderMenuItems(this.props.menuItems)}
          {/*<div className='nav-active-bar'></div>*/}
        </nav>
      )
    } else {
      return (
        <nav className='dropdown-head-nav hide-for-medium'>
          {this.renderMenuItems(this.props.menuItems)}
        </nav>
      )
    }

  }
}

Navbar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  orientVertically: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func
}

Navbar.defaultProps = {
  menuItems: ['Home', 'About', 'Contact'],
  orientVertically: false
}

export default Navbar