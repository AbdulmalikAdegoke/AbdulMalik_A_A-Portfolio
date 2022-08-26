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

      <div className="AppContent">
        <div className="intro_header">
          <h1>
            <span>AbdulMalik A. Adegoke</span> <br />
            [The Portfolio] <br />
            <Breadcrumbs aria-label="breadcrumb">
              <Link 
                underline="hover" 
                color="#d6d4d4" 
                href="/#whoAmI"
                // onMouseEnter={}
                // onMouseLeave={}
              >
                Who Am I?
              </Link>
              <Link
                underline="hover"
                color="#d6d4d4" 
                href="/#skillsXProjects"
              >
                Skills x Projects
              </Link>
              <Link 
                underline="hover" 
                color="#d6d4d4" 
                href="/#experienceXQualifications"
              >
                Experience x Qualifications
              </Link>
              <Link
                underline="hover"
                color="#d6d4d4" 
                href="/#contacts"
              >
                Contacts
              </Link>
            </Breadcrumbs>
          </h1>
          
          
        </div>

        {/* different views of the portfolio page to be rendered */}
        {
          currentPageView === "home" ?
            <div className='home_page_view'>
              <div className='navbar'>
                <div className='navbar_title'>
                  AbdulMalik A. Adegoke [The Portfolio]
                </div>
                <div>
                  
                </div>
              </div>
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
