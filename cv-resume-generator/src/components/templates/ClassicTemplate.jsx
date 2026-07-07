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
        {experience && experience.length > 0 ? (
          experience
            .filter((item) => item.position || item.company || item.responsibilities || item.from || item.until)
            .map((item, index) => (
              <div key={index} className="experience-entry">
                <p className="cv-role">{item.position}, {item.company}</p>
                <p className="cv-dates">{item.from} – {item.until}</p>
                <p>{item.responsibilities}</p>
              </div>
            ))
        ) : (
          <p>No experience added yet.</p>
        )}
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