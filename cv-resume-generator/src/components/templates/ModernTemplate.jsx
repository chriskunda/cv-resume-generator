import '../../styles/templates.css';

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
          <p className="cv-role">{experience.position} — {experience.company}</p>
          <p className="cv-dates">{experience.from} – {experience.until}</p>
          <p>{experience.responsibilities}</p>
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