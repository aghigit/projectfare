import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'



function Projects() {
  return (
    <>
    <Header></Header>
      <div style={{ marginTop: '100px' }} className='container-fluid'>
        <div className='d-flex justify-content-around'>
          <h1>All Projects</h1>
          <input type="text" placeholder='search projects by language' />
        </div>

        <Row className="mt-5 mb-4">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>  
          </Col>
        </Row>

      </div>
      <Footer></Footer>

    </>
  )
}

export default Projects