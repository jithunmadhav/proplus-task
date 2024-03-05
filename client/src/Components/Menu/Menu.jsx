import React, { useState } from 'react'
import './Menu.css'
import { TiHomeOutline } from "react-icons/ti";
import { MdMenuBook } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
function Menu({setopenCourse,setopenHome,setopenPost,setopenhamburger}) {
  return (
    <div className='menu-width'>
      <div className='logo' >
        <img className='logo-img' src="/images/graduation-cap.png" alt="" />
        <p className='logo-p'>LOGO</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(true); setopenCourse(false); setopenPost(false); setopenhamburger(false) }}>
        <p className='menu-para'><TiHomeOutline /> HOME</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenCourse(true); setopenPost(false); setopenhamburger(false) }}>
        <p className='menu-para'><MdMenuBook /> My Courses</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenCourse(false); setopenPost(true); setopenhamburger(false) }}>
        <p className='menu-para'><MdMenuBook /> Fourem</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenCourse(false); setopenPost(true); setopenhamburger(false) }}>
        <p className='menu-para'><CgProfile /> Profile</p>
      </div>
    </div>
  )
}

export default Menu
