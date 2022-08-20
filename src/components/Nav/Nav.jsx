import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi';
import {AiFillContacts} from 'react-icons/ai'
import { useState } from 'react';
function Nav() {
    const [active,setActive]=useState('#');
  return  <nav >
  <a href="#home" onClick={()=>setActive('#home')} className={active==="#home" ? 'active':''}><AiOutlineHome/></a>
  <a href="#about" onClick={()=>setActive('#about')} className={active==="#about" ? 'active':''}><BsFillPersonFill/></a>
  <a href="#skill" onClick={()=>setActive('#skill')} className={active==="#skill" ? 'active' :''}><GiSkills/></a>
  <a href="#contact" onClick={()=>setActive("#contact")} className={active==="#contact" ? "active" :""}><AiFillContacts/></a>

</nav>
  
}

export default Nav;