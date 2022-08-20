import React from 'react'
import {BsLinkedin,BsGithub,BsMailbox} from 'react-icons/bs'
function Social() {
  return (
    <div className='social'>
        <a href="https://www.linkedin.com/in/miranush-yeghishyan-6a795b224/"><BsLinkedin/></a>
        <a href="https://github.com/Mir1705"><BsGithub/></a>
        <a href="#contact" ><BsMailbox/></a>
    </div>
  )
}

export default Social