import './App.css'; // styling module for the app

import { useState } from 'react';

// component modules
import WhoAmI from './Components/PageComponents/WhoAmI';
import SkillsxProjects from './Components/PageComponents/SkillsxProjects';
import ExperiencexQualifications from './Components/PageComponents/ExperiencexQualifications';
import Contacts from './Components/PageComponents/Contacts';
import AboutMe from './Components/PageComponents/AboutMe';
import Cv from './Components/PageComponents/Cv';


// main page view for app
function App() {

  const [currentPageView,setCurrentPageView] = useState("home") // views: home, about_me, cv view

  return (
    <div className="App">

      <div className="AppContent">
        <div className="intro_header">
          <h1>AbdulMalik A Adegoke</h1>
        </div>

        {
          currentPageView === "home" ?
            <div className='home_page_view'>
              <WhoAmI />
              <SkillsxProjects />
              <ExperiencexQualifications />
              <Contacts />
            </div>
          :
          currentPageView === "about_me" ?
            <div className='about_me_view'>
              <AboutMe />
            </div>
          :
          <div className='cv_view'>
            <Cv />
          </div>

        }

        

        
      </div>
    </div>
  );
}

export default App;
