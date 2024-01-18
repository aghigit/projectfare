import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import uploadPic from '../assets/upload.jpg'

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
   <div className='border rounded p-2'>
    <div className='d-flex justify-content-between'>
      <h2>Profile</h2>
      <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'>
        <i className='fa-solid fa-caret-down'></i>
      </button>
    </div>

    <Collapse in={open}>
        <div id="example-collapse-text">
          <label>
            <input type="file" style={{display:'none'}} name="" id="" />
            <img src={uploadPic} width={'200px'} height={'200px'} className=' img-fluid rounded-circle' alt="upload file" />
          </label>
          <form action="">
            <div className='mb-2'>
            <input type="text" className='rounded w-100 p-1'/>
            </div>

            <div className='mb-2'>
            <input type="text" className='rounded w-100 p-1'/>
            </div>

            <div className='mb-3 d-grid w-100 mx-auto'>
              <button className='btn btn-warning text-dark'>update</button>
            </div>

          </form>
        </div>
      </Collapse>

   </div>
    </>
  )
}

export default Profile