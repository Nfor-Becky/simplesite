import React from 'react'
 import image from '../images/abt.jpg';
 import image2 from "../images/abt2.jpg"
 import image3 from '../images/abt3.jpg'
const About = () => {
  return (
    <div>
      <div className='about'>
        <h3 className='about-text w-4'>Our agenda and the process are straightforward.Our job is to make our cients successful.To do that we work with them to face risks up front , find hidden opportuinities, and iterate rapidly.</h3>
        <h4>Our Process.</h4>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
            <div className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={image} alt="" className='img'/>
                <h5>Discover</h5>
                <p>Our agenda and the process are straightforward.Our job is to make our cients successful.</p> 
            </div>
            <div className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={image2} alt="" className='img' />
                <h5>Discover</h5>
                <p>Our agenda and the process are straightforward.Our job is to make our cients successful.</p>
              
            </div>
            <div className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={image3} alt="" className='img'/>
                <h5>Discover</h5>
                <p>Our agenda and the process are straightforward.Our job is to make our cients successful.</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
