import React, { useState } from 'react'

import Skills from './Skills'
import NotableProjects from './NotableProjects'

export default function SkillsxProjects({ togglePageView, portfolioProjects, toggleProjectPreview }) {

  const [skillsProjectView,setSkillsProjectView] = useState("home_view") // views: home_view, skills_view, projects_view

  function toggleSectionView(view) {
    setSkillsProjectView(view)
  }
  return (
    <div id='skillsXProjects' className='containers skills_project'>
      <h2 className='sub_headings'>
        Technical Skills x Notable project(s)
      </h2>

      <div className="skills_project_content">
        
        {skillsProjectView==="home_view"?
          <>
            <div className='page_cards skills' onClick={()=>{toggleSectionView("skills_view")}}>
              Technical Skills <br />
              <img 
                className='skills_projects_icons' 
                src={require('../../Assets/Icons/icons8-skills-64-.png')} 
                alt='Skills Icon' 
              />
            </div>
            <div className='page_cards notable_projects' onClick={()=>{toggleSectionView("projects_view")}}>
              Notable Projects <br />
              <img 
                className='skills_projects_icons' 
                src={require('../../Assets/Icons/icons8-project-64-.png')} 
                alt='Projects Icon' 
              />
            </div>
          </>
        :
        skillsProjectView==="skills_view"?
          <Skills 
            toggleSectionView={toggleSectionView} 
          />
        :
          <NotableProjects 
            toggleSectionView={toggleSectionView} 
            togglePageView={togglePageView} 
            portfolioProjects={portfolioProjects} 
            toggleProjectPreview={toggleProjectPreview} 
          />
        }
        
      </div>

    </div>
  )
}
