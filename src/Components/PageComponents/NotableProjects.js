import React from 'react'

import ProjectList from './ProjectList'

export default function NotableProjects({ toggleSectionView, togglePageView, portfolioProjects, toggleProjectPreview }) {

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

      <div>
        <button
          className='page_buttons black_white'
          onClick={()=>{toggleSectionView("home_view")}}
        >
          Skills x Projects
        </button>
        <button
          className='page_buttons black_white'
          onClick={()=>{toggleSectionView("skills_view")}}
        >
          Skills
        </button>
      </div>
    </div>
  )
}
