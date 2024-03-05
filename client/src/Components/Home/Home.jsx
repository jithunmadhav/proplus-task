import React, { useState, useEffect } from 'react';
import './Home.css';
import Menu from '../Menu/Menu';
import ViewPost from '../ViewPost/ViewPost';
import Course from '../Course/Course';
import Posts from '../Posts/Posts';
import Navbar from '../Navbar/Navbar';

function Home() {
  const [openCourse, setopenCourse] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [openhamburger, setopenhamburger] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isScreenWide = 500;

  console.log(openCourse, openHome, openPost);

  return (
    <div className='Home-align'>
      {screenWidth < isScreenWide ? (
        <>
          <svg
          onClick={()=>setopenhamburger(!openhamburger)}
            style={{
              position: 'absolute',
              top: '2%',
              width: '40px',
              height: '30px',
              left: '3%',
              cursor: 'pointer',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>

          {
            openhamburger?
            <Menu
            setopenHome={setOpenHome}
            setopenPost={setOpenPost}
            setopenCourse={setopenCourse}
            setopenhamburger={setopenhamburger}
          />:
          openPost ? (
            <Posts setopenHome={setOpenHome} setopenPost={setOpenPost} />
          ) : openCourse ? (
            <Course />
          ) : (
            <ViewPost />
          )}
        </>
      ) : (
        <>
          <Menu
            setopenHome={setOpenHome}
            setopenPost={setOpenPost}
            setopenCourse={setopenCourse}
            setopenhamburger={setopenhamburger}
          />
          <div className='Home-nav'>
            <Navbar/>
          {openPost ? (
            <Posts setopenHome={setOpenHome} setopenPost={setOpenPost} />
          ) : openCourse ? (
            <Course />
          ) : (
            <ViewPost />
          )}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
