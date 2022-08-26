import React from 'react'

export default function Skills({ toggleSectionView }) {
  return (
    <div className='skills'>
      <h3 className='sub_heading'>
        Skills
      </h3>
        
      <div className="as_a_developer">
        {/* web_software_game_db_mobile */}
        {/* languages: c_c++_c#_python_html_css_js_php_react_java_node_sql_network */}
        <h4>
          As a Developer:
        </h4>
        <div className="skills_content_body">
          {/* <p>I have experience in Software Development, Website Development(both front end and backend), Agile Software Development</p> */}
          {/* <p>That being said, the languages I have experience with are as follows:</p> */}
          <h5>
            Front End
          </h5>
          <p>
            React,
            JavaScript,
            HTML,
            CSS,
            Bootstrap,
            Reactstrap
          </p>
          <h5>
            Back End
          </h5>
          <p>
            Python,
            JavaScript,
            Java,
            C/ C++/ C#
          </p>
          <h5>
            Server Side Scripting
          </h5>
          <p>
            Django (Python Web Framework),
            PHP
          </p>
          <h5>
            Database
          </h5>
          <p>
            SQL,
            MongoDB
          </p>
          <h5>
            Additional
          </h5>
          <p>
            Linux/ Unix,
            Git using GitHub
          </p>

          <p>I have experience in Software Development, Website Development(both front end and backend), Agile Software Development</p>
          {/* <h3>For Further Insight on my mastery level of each of the above languages</h3> */}
        </div>
      </div>

      <br />

      <div className="as_a_designer">
        <h4>
          As a UI/UX designer:
        </h4>
        <div className="skills_content_body">
          <p>I am currently a novice self taught UI/ UX designer.</p>
          <p>I have skills using the following tools:</p>
          <p>
            Figma,
            Adobe InDesign,
            Adobe Photoshop
          </p>
        </div>
      </div>

      <br />

      <div className="as_a_photographer">
        <h4>
          As a Photographer:
        </h4>
        <div className="skills_content_body">
          <p>I currently engage in photgraphy as a hobbyist photgrapher with a focus mainly on landscapes, natures and sometimes people.</p>
          <p># The photos being used in this portfolio were taken by me.</p>
          {/* <p>Refer to my photography gallery for an exhibitions of some of the photos I have taken</p> */}
          <p>You can also check out my instagram portfolio which contains most of my photos</p>
          <p>I have skills using the following tools:</p>
          <ul>
            <li>Adobe Lightroom</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
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
          onClick={()=>{toggleSectionView("projects_view")}}
        >
          Notable Projects
        </button>
      </div>

      {/* <div id="as_an_artist">
        An animator
        Traditional drawing
        A digital artist
        <div id="as_an_artist_header">
          <h1>As an Artist</h1>
        </div>
        <div id="as_an_artist_body">
          <h3>I have had an interest in art from a very young age and </h3>
          <div id="as_an_animator">

          </div>
        </div>
      </div>

      <div id="as_a_videographer">
        <div id="as_a_videographer_header">
          <h1>As a Videographer</h1>
        </div>
        <div id="as_a_videographer_body">

        </div>
      </div>
      <div id="as_a_youtuber">
        <div id="as_a_youtuber_header">
          <h1>As a Youtuber</h1>
        </div>
        <div id="as_a_youtuber_body">

        </div>
      </div> */}

    </div>
  )
}
