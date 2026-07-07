import '../../styles/template.css';

function MinimalTemplate({ personalInfo, education, experience }) {
  return (
    <div className="template-minimal">
      <h1>{personalInfo.name || 'Your Name'}</h1>
      <p className="contact-line">{personalInfo.email} · {personalInfo.phone}</p>

      <div className="block">
        <p className="cv-label">Experience</p>
        <p className="cv-role">{experience.position} at {experience.company}</p>
        <p className="cv-dates">{experience.from} – {experience.until}</p>
        <p>{experience.responsibilities}</p>
      </div>

      <div className="block">
        <p className="cv-label">Education</p>
        <p className="cv-role">{education.title}, {education.school}</p>
        <p className="cv-dates">{education.date}</p>
      </div>
    </div>
  );
}

export default MinimalTemplate;