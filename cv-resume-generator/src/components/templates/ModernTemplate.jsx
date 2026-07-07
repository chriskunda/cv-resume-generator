import '../../styles/template.css';

function ModernTemplate({ personalInfo, education, experience }) {
  const initials = personalInfo.name
    ? personalInfo.name.trim().split(/\s+/).map((n) => n[0]).join('').slice(0, 2).toUpperCase()
    : '—';

  return (
    <div className="template-modern">
      <aside className="modern-sidebar">
        <div className="modern-monogram">{initials}</div>
        <h1>{personalInfo.name || 'Your Name'}</h1>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
      </aside>
      <main className="modern-main">
        <section>
          <p className="cv-label">Experience</p>
          {experience && experience.length > 0 ? (
            experience
              .filter((item) => item.position || item.company || item.responsibilities || item.from || item.until)
              .map((item, index) => (
                <div key={index} className="experience-entry">
                  <p className="cv-role">{item.position} — {item.company}</p>
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
          <p className="cv-role">{education.title}</p>
          <p>{education.school}</p>
          <p className="cv-dates">{education.date}</p>
        </section>
      </main>
    </div>
  );
}

export default ModernTemplate;