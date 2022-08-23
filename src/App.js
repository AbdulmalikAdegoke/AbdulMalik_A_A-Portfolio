import './App.css'; // styling module for the app

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

  function togglePageView(view) {
    setCurrentPageView(view)
  }

  return (
    <div className="App">

      <div className="AppContent">
        <div className="intro_header">
          <h1>AbdulMalik A Adegoke</h1>
        </div>

        {/* different views of the portfolio page to be rendered */}
        {
          currentPageView === "home" ?
            <div className='home_page_view'>
              <WhoAmI togglePageView={togglePageView} />
              <SkillsxProjects togglePageView={togglePageView} />
              <ExperiencexQualifications togglePageView={togglePageView} />
              <Contacts />
            </div>
          :
          currentPageView === "project" ?
            <div className='projects_view'>
              <Projects togglePageView={togglePageView} />
            </div>
          :
          currentPageView === "about_me" ?
            <div className='about_me_view'>
              <AboutMe togglePageView={togglePageView} />
            </div>
          :
          currentPageView === "cv" ?
            <div className='cv_view'>
              <Cv togglePageView={togglePageView} />
            </div>
          :
          <div className='error_view'>
            <ErrorPage togglePageView={togglePageView} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
