import React, { useEffect, useState } from 'react';
import './CourseDetails.css';
import './CourseDetails.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";


function CourseDetails() {
  
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showCourse, setshowCourse] = useState(false);
  const [chapterHeight, setchapterHeight] = useState(false)
  const [chapterCount, setchapterCount] = useState(1)
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
        <>
        {chapterCount.ma}
        <div className='outer-div'>
          <div style={{ display:'flex' }}>
          <div className='num-circle'>1</div>&nbsp;
          <p className='course-crt-p'>Course Information & FAQ  <IoIosArrowForward/></p> &ensp;
          <div className='curr-num-circle'>2</div>&nbsp;
          <p className='curr-course-crt-p'>Upload Course Materials <IoIosArrowForward/></p>&ensp;
          <div className='num-circle'>3</div>&nbsp;
          <p className='course-crt-p'>Pricing <IoIosArrowForward/></p> &ensp;
          <div className='num-circle'>4</div>&nbsp;
          <p className='course-crt-p'>Publish </p>         
          </div>
          <div className='chapter-outer-div' >
          <div className='chapter-crt-div'>
            <p>chapter</p>
            <div>
            <FaPlus />&ensp;
            <IoIosArrowDown onClick={()=>setchapterHeight(!chapterHeight)} style={{ cursor:'pointer' }} />&ensp;
            
            </div>
          </div>
          <div className='chapter-inner-div' style={{ display:`${chapterHeight ? 'block': 'none'}` }}></div>
          </div>
        </div>
        </>
    )}
    </>
  );
}

export default CourseDetails;


