import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadproj from '../assets/uploadimgproj.jpg'

function Add() {
  const [show,setShow]= useState(false)
  const handleShow =() => setShow(true)
  const handleClose= () => setShow(false)

  return (
    <>
    <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link  d-flex align-items-center justify-content-center'>
      <i style={{height:'34px'}} className='fa-solid fa-plus fa-2x me-2 '></i> Add Project
    </button>

    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <label>
                <input type="file" style={{display:'none'}} />
                <img src={uploadproj} height={'300px'} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className='mb-3'>
                <input type="text" name="" id="" placeholder='Project-Title'  className= 'border rounded w-100 p-2'/>
              </div>
              <div className='mb-3'>
                <input type="text" name="" id="" placeholder='Language Used'  className='border rounded w-100 p-2'/>
              </div>
              <div className='mb-3'>
                <input type="text" name="" id="" placeholder='Project Github Link'  className='border rounded w-100 p-2'/>
              </div>
              <div className='mb-3'>
                <input type="text" name="" id="" placeholder='Project website link'  className='border rounded w-100 p-2'/>
              </div>
              <div className='mb-3'>
                <input type="text" name="" id="" placeholder='Project Overview'  className='border rounded w-100 p-2'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add