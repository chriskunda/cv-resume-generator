import '../../styles/template.css';

function ClassicTemplate({ personalInfo, education, experience }) {
  return (
    <div className="template-classic">
      <header>
        <h1>{personalInfo.name || 'Your Name'}</h1>
        <p className="contact-line">{personalInfo.email} · {personalInfo.phone}</p>
      </header>
      <hr className="rule" />
      <section>
        <p className="cv-label">Experience</p>
        <p className="cv-role">{experience.position}, {experience.company}</p>
        <p className="cv-dates">{experience.from} – {experience.until}</p>
        <p>{experience.responsibilities}</p>
      </section>
      <section>
        <p className="cv-label">Education</p>
        <p className="cv-role">{education.title}, {education.school}</p>
        <p className="cv-dates">{education.date}</p>
      </section>
    </div>
  );
}

export default ClassicTemplate;