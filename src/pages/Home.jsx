import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'


function Home() {
    const navigate =useNavigate()
    const handleNavigate=()=>{
        navigate('/projects')
    }

  return (
    <>
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h1>
                        <i style={{height:'85px'}} className='fa-solid fa-hands-holding-circle'></i>
                        project fair
                    </h1>
                    <p style={{textAlign:'justify'}}> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Recusandae quaerat, iure nesciunt at minus et? Obcaecati possimus nostrum
                         architecto ducimus facilis nesciunt fuga minus 
                         laudantium error, a consequuntur doloribus nisi.
                    </p>
                    <Link className="btn btn-warning mt-3" to={'login'}> starts to explore</Link>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-4">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
     </div>
     <div className='mt-5 mb-5'>
        <h1 className='text-center'>explore projects</h1>
        <marquee behavior="" direction="">
            <div className='d-flex justify-content-between'>
                <div className='project me-5'>
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        </marquee>
        <div className='text-center'>
            <button onClick={handleNavigate} className='btn btn-link'></button>
        </div>
     </div>
     <Link style={{textDecoration:'none'}} to={'projects'}>
     <h1>see all projects</h1>
     </Link>
     <Footer></Footer>
    </>
  )
}

export default Home