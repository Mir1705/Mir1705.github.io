import React from 'react'
import './Home.css'
import CV from './Miranush Yeghishyan CV.pdf';
import faceimage  from './face.jpg'
import Social from './Social';
function Home() {
  return (
    <header>
      <div className="container home" id='#home'>
        <h5>I'm</h5>
        <h1>Miranush Yeghishyan</h1>
        <h5>Frontend developer</h5>

        <div className="cv">
          <a href={CV} download className='button'>Download Cv</a>
          <a href="#contact" className='button bt'>Let's talk</a>
          </div>
          <Social/>
          <div className="me">
               <img src={faceimage} alt="faceimage"  className="image"/>
          </div>
        </div>
      
    </header>
  )
}

export default Home