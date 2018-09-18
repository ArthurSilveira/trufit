import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import tfPhoto from '../../../../assets/images/tf-photo-0.jpg'
import tfPhoto1 from '../../../../assets/images/tf-photo-1.jpg'
import tfPhoto2 from '../../../../assets/images/tf-photo-2.jpg'
import tfPhoto3 from '../../../../assets/images/tf-photo-3.jpg'

class PicSlider extends Component {
  render () {
    return (
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
        <div>
          <img src={tfPhoto} alt="404"/>
        </div>
        <div>
          <img src={tfPhoto1} alt="404"/>
        </div>
        <div>
          <img src={tfPhoto2} alt="404"/>
        </div>
        <div>
          <img src={tfPhoto3} alt="404"/>
        </div>
      </Carousel>
    )
  }
}

export default PicSlider