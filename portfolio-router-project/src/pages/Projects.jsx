import React from 'react'
import data from '../data'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [...data];
  return (
    <div className='flex justify-center flex-col'>
        <h2 className='my-4 text-3xl mx-17'>My projects are as follows:</h2>
        <div className='flex flex-wrap justify-evenly overflow-hidden'>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.id}/>
      })}
    </div>
    </div>
  )
}

export default Projects
