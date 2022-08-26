import './App.css'; // styling module for the app

import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';

import { useState } from 'react';

// component modules
import WhoAmI from './Components/PageComponents/WhoAmI';
import SkillsxProjects from './Components/PageComponents/SkillsxProjects';
import ExperiencexQualifications from './Components/PageComponents/ExperiencexQualifications';
import Contacts from './Components/PageComponents/Contacts';
import AboutMe from './Components/PageComponents/AboutMe';
import Projects from './Components/PageComponents/ProjectPreview';
import Cv from './Components/PageComponents/Cv';
import ErrorPage from './Components/ErrorPage';


// main page view for app
function App() {
  const [iconDisplayState,setIconDisplayState] = useState({
    whoami:false,
    skillsxprojects:false,
    experiencexqualifications:false,
    contacts:false
  }) // views: whoami, skillsxprojects, experiencexqualifications, contacts
  const [currentPageView,setCurrentPageView] = useState("home") // views: home, project, about_me, cv view

  const [portfolioProjects,setPortfolioProjects] = useState([])

  const [projectToPreview,setProjectToPreview] = useState()

  function togglePageView(view) {
    setCurrentPageView(view)
  }

  function toggleProjectPreview(project) {
    setProjectToPreview(project)
  }

  return (
    <div className="App">
      {/* Abdulmalik's Grad */}
      <div className="AppContent">
        <div className="intro_header">
          <div className='bg_img_preview'>
            <h1>
              <span>AbdulMalik A. Adegoke</span> <br />
              [The Portfolio] <br /> <br />
              <Breadcrumbs aria-label="breadcrumb">
                <Link 
                  underline="hover" 
                  color="#d6d4d4" 
                  href="/#whoAmI"
                  // onMouseEnter={}
                  // onMouseLeave={}
                >
                  <img 
                    className='intro_icons' 
                    src={require('./Assets/Icons/icons8-who-96.png')} 
                    alt='Who Am I Icon' 
                  /> <br />
                  Who Am I?
                </Link>
                <Link
                  underline="hover"
                  color="#d6d4d4" 
                  href="/#skillsXProjects"
                >
                  <img 
                    className='intro_icons' 
                    src={require('./Assets/Icons/icons8-skills-64.png')} 
                    alt='Skills x Projects Icon' 
                  /> <br />
                  Skills x Projects
                </Link>
                <Link 
                  underline="hover" 
                  color="#d6d4d4" 
                  href="/#experienceXQualifications"
                >
                  <img 
                    className='intro_icons' 
                    src={require('./Assets/Icons/icons8-internship-50.png')} 
                    alt='Experience x Qualifications Icon' 
                  /> <br />
                  Experience x Qualifications
                </Link>
                <Link
                  underline="hover"
                  color="#d6d4d4" 
                  href="/#contacts"
                >
                  <img 
                    className='intro_icons' 
                    src={require('./Assets/Icons/icons8-address-book-64.png')} 
                    alt='Contacts Icon' 
                  /> <br />
                  Contacts
                </Link>
              </Breadcrumbs>
            </h1>
          </div>
          
          
          
        </div>

        {/* different views of the portfolio page to be rendered */}
        {
          currentPageView === "home" ?
            <div className='home_page_view'>
              {/* <div className='navbar'>
                <div className='navbar_title'>
                  AbdulMalik A. Adegoke [The Portfolio]
                </div>
                <div>
                  
                </div>
              </div> */}
              <WhoAmI 
                togglePageView={togglePageView} 
              />

              <SkillsxProjects 
                togglePageView={togglePageView} 
                portfolioProjects={portfolioProjects} 
                toggleProjectPreview={toggleProjectPreview} 
              />

              <ExperiencexQualifications togglePageView={togglePageView} />

              <Contacts />
            </div>
          :
          currentPageView === "project" ?
            <Projects 
              togglePageView={togglePageView} 
              projectToPreview={projectToPreview} 
            />
          :
          currentPageView === "about_me" ?
            <AboutMe 
              togglePageView={togglePageView} 
            />
          :
          currentPageView === "cv" ?
            <Cv 
              togglePageView={togglePageView} 
            />
          :
          <div className='error_view'>
            <ErrorPage 
              togglePageView={togglePageView} 
            />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
