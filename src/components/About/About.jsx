import React from 'react'
import './About.css'
import aboutimage from './about.webp'
function About() {
  return (
    <section id='about'>
      <h2 className="habout">About me </h2>
      <div className="container container_about">
        <div className="aboutm">
          <div className="imag">
            <img src={aboutimage} className="imgabout"
            alt="aboutimage" />
          </div>
          <p className="p">
          I'm Miranush a Frontend developer.Likes working with new technologies and overcame new challenges.Likes learning from mistakes which makes stronger.I'm person who never stops learning and ready to face new and interesting problems.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About