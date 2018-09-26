import React, { Component } from 'react'
import Parser from 'html-react-parser'
import './LandingCards.css'
import PropTypes from 'prop-types'
import exampleIcon1 from '../../../../assets/icons/certificate-icon.svg'
import exampleIcon2 from '../../../../assets/icons/guarantee-icon.svg'
import exampleIcon3 from '../../../../assets/icons/quality-icon.svg'

const exampleInfo = [
  {
    id: 'item1',
    icon: exampleIcon1,
    title: 'Example Title',
    text: 'Example message goes in here lerem ipsum... Blah blah blah you catch the drift'
  },
  {
    id: 'item2',
    icon: exampleIcon2,
    title: 'Second Title',
    text: 'Example message goes in here lerem ipsum... Blah blah blah you catch the drift'
  },
  {
    id: 'item3',
    icon: exampleIcon3,
    title: 'Third Title',
    text: 'Example message goes in here lerem ipsum... Blah blah blah you catch the drift'
  }
]

class LandingCards extends Component {

  static renderInfo (info) {
    return info.map( item => {
      return (
        <div className={`card-container ${item.id}`} key={item.id}>
          <div className='card-image'><img src={item.icon} alt='info-icon'/></div>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text'>{Parser(item.text)}</p>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='landing-cards'>
        {LandingCards.renderInfo(this.props.info)}
      </div>
    )
  }
}

LandingCards.propsTypes = {
  info: PropTypes.object.isRequired
}

LandingCards.defaultProps = {
  info: exampleInfo
}

export default LandingCards