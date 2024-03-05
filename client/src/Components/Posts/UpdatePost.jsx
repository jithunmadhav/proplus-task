import React, { useState } from 'react';
import {
    MDBInput,
    MDBFile,
    MDBTextArea,
    MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Posts.css'
import axios from '../../axios';
import { useSelector } from 'react-redux';

export default function UpdatePost( {data,setOpenUpdateBox}) {
    console.log("DATAAAAAAAAA",data);
    const [files, setfiles] = useState(data.image)
    const [caption, setcaption] = useState(data.caption)
    const [description, setdescription] = useState(data.description)
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.patch('/updatePost',{caption,files,description,id:data._id},{headers:{'Content-Type':'multipart/form-data'}}).then((response)=>{
            console.log(response.data);
            if(!response.data.err){
                setOpenUpdateBox(false)
            }
        })

    }
  return (
    <div className='main-width'>
    <form onSubmit={handleSubmit} className='form-align'>
      <MDBInput id='form4Example1' wrapperClass='mb-4' onChange={(e)=>setcaption(e.target.value)} value={caption} label='Caption' />
      <MDBFile label='Choose an image' onChange={(e)=>setfiles(e.target.files[0])} id='customFile' style={{ marginBottom:'35px' }} accept="image/x-png, image/gif, image/jpeg"/>      
      <MDBTextArea wrapperClass='mb-4' onChange={(e)=>setdescription(e.target.value)} value={description} textarea id='form4Example3' rows={3} label='Description' />
      <MDBBtn type='submit' className='mb-4' block>
        Update
      </MDBBtn>
    </form>
    </div>
        
  );
}