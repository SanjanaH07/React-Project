import React from 'react'
import PickMeals from '../Assests/pick-meals-image.png'
import ChooseMeals from '../Assests/choose-image.png'
import DeliveryMealsImage from '../Assests/delivery-image.png'

export default function Work() {
    const work=[
        {
            Image : PickMeals,
            title: "PickMeals",
            text:"Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best!"
        },
        {
            Image: ChooseMeals,
            title:"Choose How Often",
            text: "Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best!"
        },
        {
            Image: DeliveryMealsImage,
            title:"Fast Deliveries",
            text: "Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best!"
        }
    ]
  return (
    <div className='work-section-wrapper' id='workk'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className="primary-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque sed aut exercitationem debitis ducimus doloremque enim 
            </p>
        </div>
        <div className="work-section-bottom">
            {
                work.map((data)=>(
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.Image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <h2>{data.text}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
