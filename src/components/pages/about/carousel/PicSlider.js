import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class PicSlider extends Component {
  render () {
    return (
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
        <div>
          <img src="https://www.safelite.com/images/default-source/default-album/replace-technician@2x.jpg?sfvrsn=7a541609_0" alt="404"/>
        </div>
        <div>
          <img src="https://glass-production.s3.amazonaws.com/uploads/blog_images/0d54b67e239a441a8fd395055019fa15.jpg?v=63648257798" alt="404"/>
        </div>
      </Carousel>
    )
  }
}

export default PicSlider