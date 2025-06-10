import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <>
    <div className='container my-5' id="Projects">
    <h1 className='text-center'>Projects</h1>
    <div className="row mt-3 justify-content-center align-items-center">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
    </div>
    </>
  )
}

export default Projects