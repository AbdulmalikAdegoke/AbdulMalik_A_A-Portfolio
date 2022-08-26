import React from 'react'

import ProjectList from './ProjectList'

export default function NotableProjects({ toggleView, togglePageView, portfolioProjects, toggleProjectPreview }) {

  return (
    <div className='notable_projects_container'>
      <h3 className='sub_heading'>
        Notable Projects
      </h3>

      <div className='list_of_projects'>
        {
          portfolioProjects.map(
            (project,id)=>{
              return <ProjectList key={id} project={project} />
            }
          )
        }
      </div>
    </div>
  )
}
