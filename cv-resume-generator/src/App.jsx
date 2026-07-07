import { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', title: '', date: '' });
  const [experience, setExperience] = useState([
    { company: '', position: '', responsibilities: '', from: '', until: '' }
  ]);

  return (
    <div className="app">
      <h1>CV / Resume Builder</h1>
      <p className="app-subtitle">Fill in your details, then preview and export your CV below.</p>

      <div className="form-sections">
        <PersonalInfo data={personalInfo} onSave={setPersonalInfo} />
        <Education data={education} onSave={setEducation} />
        <Experience data={experience} onSave={setExperience} />
      </div>

      <CVPreview personalInfo={personalInfo} education={education} experience={experience} />
    </div>
  );
}

export default App;