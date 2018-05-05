import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './styles/GoogleReviews.css'
import data from '../assets/businessData.json'


class GoogleReviews extends Component {
  constructor(props)  {
    super(props)

    this.state = {
      secondsElapsed: 0,
      timeToSwap: false,
      reviewNumber: 0,
      display: 'fadeInLeft'
    }
  }

  tick() {
    this.setState( (prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }))

    // When 5 seconds have elapsed, hide current review then wait a second and
    // show the next one.
    if ( (this.state.secondsElapsed % 5) === 0 ) {
      this.setState({display: 'fadeOutRight'})
      setTimeout( () => {
        this.swapReviews()
        this.setState({display: 'fadeInLeft'})
      }, 1000)
    }

    console.log(this.state.display)
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  swapReviews() {
    if (this.state.reviewNumber < 4) {
      this.setState((prevState) => ({
        reviewNumber: prevState.reviewNumber + 1
      }))
    } else {
      this.setState({reviewNumber: 0})
    }
  }

  renderReviews() {
    let reviews = data.result['reviews']

    const currentReview = reviews[this.state.reviewNumber]

    return (
      <div className={`animated ${this.state.display}`}>
        <h4>{currentReview['rating']} stars</h4>
        <h3 className='review-text'>
          <span className='quote-marks'>“</span>
          {currentReview['text']}
          <span className='quote-marks'>"</span>
        </h3>
        <h5> - {currentReview['author_name']}</h5>
      </div>
    )

  }

  render() {
    return (
      <div className='google-reviews'>
        {this.renderReviews()}
      </div>
    )
  }
}

export default GoogleReviews