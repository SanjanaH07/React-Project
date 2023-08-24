import React from 'react'
import AboutBackground from '../Assests/about-background.png'
import AboutBannerImage from '../Assests/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function About() {
  return (
    <div className='about-section-container' id='aboutt' >
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBannerImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of A Balance Diet
            </h1>
            <p className="primary-text">
            Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best!
            </p>
            <p className="primary-text">
            A perfect balanced diet is composed of carbohydrates, proteins, fats, minerals, high fiber content, vitamins, and more.     
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill />
                    Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About
