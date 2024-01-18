import React from 'react'
import Add from './Add'
import Edit from './Edit'


function MyProjects() {
  return (
    
    <>
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
        <h2>myprojects</h2>
        <Add></Add>
      </div>
      <div className='mt-4'>
        <div className='border rounded d-flex align-items-center justify-content-between mb-3 p-2 '>
        <h5 className='ms-2'>title</h5>
        <div className='icons d-flex align-items-center justify-content-center '>
          <Edit></Edit>
          <a href="" target='_blank' className='btn btn-link text-primary  ms-2'  id=''>
            <i style={{height:'34px'}} className="fa-brands fa-github fa-2x"></i>
            </a>
            <button className='btn btn-link text-danger ms-2'>
              <i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i>
            </button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyProjects