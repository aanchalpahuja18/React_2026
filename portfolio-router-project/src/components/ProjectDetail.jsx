import React from 'react'
import data from '../data'
import {useParams} from "react-router-dom"

const ProjectDetail = () => {
    let params = useParams();
    let id = Number(params.projectId);

    let project = data.find((el) => (el.id === id));
    if(project === undefined){
        return (
            <div className='flex justify-center items-center h-full text-3xl'>Project Not Found!</div>
        )
    }
    
    
    return (
    <div>
        <h1 className='text-3xl m-6'>Project Detail</h1>
      <div className='bg-gray-900 text-white m-6 p-10 flex flex-col gap-4'>
        <h2 className='text-2xl'>{project.title}</h2>
        <p className='text-lg'>{project.desc}</p>
        <p className='bg-gray-200 max-w-max p-2 text-black font-bold'>{project.techStack}</p>
        <a href={project.gitHubUrl} className='text-blue-100 cursor-pointer font-medium'>Github Url</a>
      </div>
    </div>
  )
}

export default ProjectDetail
