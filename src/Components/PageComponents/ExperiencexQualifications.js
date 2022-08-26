import React from 'react'

export default function ExperiencexQualifications({ togglePageView }) {
  return (
    <div id='experienceXQualifications' className='containers experience_qualifications'>
      <h2 className='sub_heading'>
        Experience x Qualifications
      </h2>

      <div className="experience_qualifications_content">
        <div className="experience_qualifications_box">
          <div className='qualifications'>
            <h3>
              Qualifications
            </h3>
            <h4>
              Computer Science BSc Hons. <br />
              University of Dundee <br />
              (2018-2022)
            </h4>
            <p>
              Studied and completed the course, computer science, with a Bachelors of Science Hounours Degree 2022.
            </p>
          </div>
          <br />
          <div className='experience'>
            <h3>
              Experience
            </h3>
            <h4>
              Software Development Intern <br />
              Algorism Ltd <br />
              (Jun 2019 - Jul 2019)
            </h4>
            <p>
              Paired with a software developer of the company
            </p>
            <h4>
              Hackathon Participant and winner <br />
              University of Dundee <br />
              (Mar 2022-Apr 2022)
            </h4>
            <p>
              <b>DUCS Quackathon</b>- Using C# I and a group of fellow computing students made an educational game on ducks.
            </p>
            <p>
              <b>BCS Hackathon</b>- Using product management skills I proposed a minimum viable project to deal with the problem of financial illiteracy in the education sector
            </p>
          </div>

          <div>
            <button
              className="page_buttons white_black"
              onClick={()=>{togglePageView("cv")}}
            >
              CV [Preview x Download]
            </button>
          </div>
        </div>

        <div className="portrait_image">
          <img 
            className='portrait_img' 
            src={require('../../Assets/Abdulmalik\'s Grad.jpg')} 
            alt="A portrait of AbdulMalik Adegoke" 
          />
        </div>
      </div>

      
    </div>
  )
}
