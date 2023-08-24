import React from 'react'
import ProfilePic from '../Assests/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {
  return (
    <div className='work-section-wrapper' id='test'>
        <div className='work-section-top'>
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatum architecto amet rem ipsam quod!</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="No image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum alias explicabo inventore, velit cupiditate.</p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h1>John Doe</h1>
        </div>

    </div>
  )
}
