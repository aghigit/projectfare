import React from 'react'
import { Link } from 'react-router-dom'
import authImage from '../assets/authimage.jpg'
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Auth({insideRegister}) {

  return (
    <>
    <Header></Header>
      <div style={{ width: '100%', height: '100vh', marginTop:'50px' }} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
          <Link to={'/'} style={{textDecoration:'none'}}>back to home</Link>
          <div className='card shadow p-5 bg-success'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <img className='w-100' src={authImage} alt="" />
              </div>
              <div className='col-lg-6'>
                <h1>project fair</h1>
                <h5>sign in {insideRegister?'Up':'In'}</h5>
                <Form>
                  {
                    insideRegister&&
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="mb-3" type="email" placeholder="Enter email" />
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>
                  {
                    insideRegister?
                    <div>
                      <button className='btn btn-light mb-2'>register</button>
                      <p>already have account? click here
                        <Link to={'/login'} className='text-light'> login</Link>
                      </p>
                    </div>:
                    <div>
                      <button className='btn btn-light mb-2' >login</button>
                      <p>new user click here
                        <Link to={'/register'} className='text-light'>register</Link>
                      </p>
                    </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Auth