import './App.css'; // styling module for the app

// component modules
import WhoAmI from './Components/PageComponents/WhoAmI';
import SkillsxProjects from './Components/PageComponents/SkillsxProjects';
import ExperiencexQualifications from './Components/PageComponents/ExperiencexQualifications';
import Contacts from './Components/PageComponents/Contacts';

// main page for app
function App() {
  return (
    <div className="App">

      <div className="AppContent">
        <div className="header">
          <h1>AbdulMalik A Adegoke</h1>
        </div>
        
        <WhoAmI />
        <SkillsxProjects />
        <ExperiencexQualifications />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
