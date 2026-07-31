import React from 'react'
import {useNavigate} from "react-router-dom"


const ProjectCard = ({project}) => {

    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/projects/${id}`)
    }
  return (
    <div>
      <div className='bg-gray-900 text-white m-4 p-6 max-w-[450px] h-[320px]'>
        <h3 className='text-2xl my-2'>{project.title}</h3>
        <p className='text-lg text-amber-200'>{project.desc}</p>
        <p className='bg-gray-600 max-w-max rounded-lg p-2 my-4'>{project.techStack}</p>
        <span className='text-blue-300 cursor-pointer text-md'>
            <a href={project.gitHubUrl} target='blank'>Github Url</a>
        </span>
        <button className='mx-4 cursor-pointer bg-gray-200 rounded-md px-2 py-1 text-black hover:bg-blue-200 transition-all duration-200' onClick={() => handleClick(project.id)}>Go to Project</button>
      </div>
    </div>
  )
}

export default ProjectCard
