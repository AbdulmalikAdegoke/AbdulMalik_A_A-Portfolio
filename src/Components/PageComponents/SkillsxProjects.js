import React, { useState } from 'react'

import Skills from './Skills'
import NotableProjects from './NotableProjects'

export default function SkillsxProjects({ togglePageView }) {

  const [skillsProjectView,setSkillsProjectView] = useState("home_view") // views: home_view, skills_view, projects_view
  return (
    <div className='skills_project_container'>
      <h2 className='sub_headings'>
        Skills x Projects
      </h2>

      <div className="skills_project_content">
        
        {skillsProjectView==="home_view"?
          <>
            <div>
              Technical Skills
            </div>
            <div>
              Notable Projects
            </div>
          </>
        :
        skillsProjectView==="skills_view"?
          <Skills />
        :
          <NotableProjects />
        }
        
        
        <div className=''>
          <h3>Technical Skills x Notable project(s)</h3>
          <div className=''>

          </div>

          <h3>Technical Skills x Notable project(s)</h3>
          <div className=''>

          </div>

          <h3>Design Skills x Notable project(s)</h3>
          <div className=''>

          </div>
        </div>

        <div className="">

        </div>
      </div>

    </div>
  )
}
