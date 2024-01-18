import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'





function Dashboard() {
  return (
    <>
    <Header insideDashBoard></Header>
    <div style={{marginTop:'150px'}} className='container'>
      <h1>welcome <span className='text-danger'>user</span></h1>
      <div className='row'>
        <div className='col-lg-8'>
          <MyProjects></MyProjects>
        </div>
        <div className='col-lg-4'>
          <Profile></Profile>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Dashboard