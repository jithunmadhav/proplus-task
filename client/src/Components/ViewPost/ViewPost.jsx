import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './ViewPost.css';
import { useSelector } from 'react-redux';
import imageUrl from '../../imageUrl';
import UpdatePost from '../Posts/UpdatePost';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function ViewPost() {
  const { user } = useSelector(state => state);
  const userId = user?.details?._id;
  const [result, setresult] = useState([]);
  const [openUpdateBox, setOpenUpdateBox] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [data, setdata] = useState('');
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showPost, setshowPost] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBackdrop(false);
      setshowPost(true);
    }, 400);
  }, []);

  const handleEdit = (item) => {
    console.log(item, '#####');
    setOpenUpdateBox(true);
    setdata(item);
  };

  const handleDelete = (id) => {
    axios.get('/deletePost', { params: { id } }).then((response) => {
      if (!response.data.err) {
        setrefresh(!refresh);
      }
    });
  };

  useEffect(() => {
    axios.get('/userPost', { params: { userId } }).then((response) => {
      if (!response.data.err) {
        console.log(response.data.result);
        setresult(response.data.result);
      }
    }).catch((error) => {
      console.log(error);
    });
  }, [openUpdateBox, refresh]);
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
      {showPost && (
        <>
          {result?.length === 0 ? (
            <div className='empty-div'>
              <h1 className='Empty-head'>No post yet</h1>
            </div>
          ) : (
            <>
              {openUpdateBox ? (
                <UpdatePost data={data} setOpenUpdateBox={setOpenUpdateBox} />
              ) : (
                <div className='main-width'>
                  {result.map((item) => (
                    <div className='post-box' key={item._id}>
                      <div>
                        <img className='image-box' src={imageUrl + item?.image?.filename} alt="" />
                        <p className='post-caption'>{item.caption}</p>
                        <p className='post-description'>{item.description}</p>
                        <div style={{ display: 'flex' }}>
                          <button className='edit-btn' onClick={() => handleEdit(item)}>EDIT</button>
                          <div style={{ width: '50px' }}></div>
                          <button className='logout-btn' onClick={() => handleDelete(item._id)}>DELETE</button>
                        </div>
                      </div>
                      <hr className='hr-width'></hr>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default ViewPost;
