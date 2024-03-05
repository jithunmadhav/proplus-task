import React, { useEffect, useState } from 'react';
import './Course.css';
import { AiOutlineLogout, AiFillEdit } from "react-icons/ai";
import axios from '../../axios';
import imageUrl from '../../imageUrl';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { IoIosArrowForward } from "react-icons/io";


function Course() {
  
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showCourse, setshowCourse] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowBackdrop(false);
      setshowCourse(true);
    }, 400);
  }, []);



  return (
    <>
    {showBackdrop && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {showCourse && (
        <div className='outer-div'>
          <div style={{ display:'flex' }}>
          <div className='curr-num-circle'>1</div>&nbsp;
          <p className='curr-course-crt-p'>Course Information & FAQ  <IoIosArrowForward/></p> &ensp;
          <div className='num-circle'>2</div>&nbsp;
          <p className='course-crt-p'>Upload Course Materials <IoIosArrowForward/></p>&ensp;
          <div className='num-circle'>3</div>&nbsp;
          <p className='course-crt-p'>Pricing <IoIosArrowForward/></p> &ensp;
          <div className='num-circle'>4</div>&nbsp;
          <p className='course-crt-p'>Publish </p>         
          </div>

          <div className='course-info-div'>
            <p className='course-info-p'>Course Information</p>
            <p>Title</p>
            <input className='course-info-input' type="text" />

            <div style={{ display:'flex' }}>
            <div style={{ width:"50%" }}>
              <p>Category</p>
              <select className='course-info-select' name="" id="">
              <option value="Data management">Data management</option>
              </select>
              </div>
              <div style={{ width:'20px' }}></div>
              <div style={{ width:"50%" }}>
                <p>Level</p>
                <select className='course-info-select' name="" id="">
               <option value="Basic">Basic</option>
              </select>             
               </div>
            </div>

            <p>Description</p>
            <textarea className='course-info-textarea' name="" id="" cols="30" rows="10"></textarea>
            <p>Frequently Asked Questions</p>
            <input className='course-info-input' type="text" />
            <div className='course-info-button-div'>
            <button className='course-info-button'>Save & Coninue</button>
            </div>

          </div>
        </div>
    )}
    </>
  );
}

export default Course;
