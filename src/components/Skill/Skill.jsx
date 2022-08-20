import React from 'react'
import './Skill.css'
import face  from './face.png'
function Skill() {
  return (
    <section id='skill'>
      <h2>Skills </h2>
      
      <div className="container skilldiv">
       <div className="skilldev">
       <h2 className="html">HTML</h2>
          <h2 className="css">CSS(Sass,Scss)</h2>
          <h2 className="js">Js</h2>
          <h2 className="react">React js</h2>
          <h2 className="redux">Redux</h2>
     
        <h2 className="discrete">Discrete mathematics</h2>
        <h2 className="analysis">Mathematical analysis</h2>
        <h2 className="havtes">Probability theory</h2>
        <h2 className="graph">Graph theory</h2>
       </div>
          
        <div className="me-face">
               <img src={face} alt="faceimage"  className="image"/>
          </div>
      
        </div>
       
    </section >
  )
}

export default Skill