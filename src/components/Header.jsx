import React from 'react'
import { Link } from 'react-router-dom'


function Header({insideDashBoard}) {
  return (
    <>
    <div style={{ backgroundColor:'#90ee90',width:'100%', position:'fixed',zIndex:5}} className='p-3 d-flex align-items-center'>
      <Link style={{textDecoration:'none'}} to='/'>
      <h1 className='ms-4'>Project Fair</h1>
      </Link>
      {
        insideDashBoard&&
        <div className='ms-auto me-4'>
          <button style={{textDecoration:'none'}} className='btn btn-link fw-folder text-light'>logout</button>
        </div>
      }
    </div>
    </>
  )
}

export default Header