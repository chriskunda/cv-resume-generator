import { useState } from 'react';
import '../styles/Card.css';

function Experience({ data, onSave }) {
  const [formData, setFormData] = useState(data);
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
    setIsEditing(false);
  }

  return (
    <section className="card">
      <h2>Work Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="company" placeholder="Company name" value={formData.company} onChange={handleChange} />
          <input name="position" placeholder="Position title" value={formData.position} onChange={handleChange} />
          <textarea name="responsibilities" placeholder="Main responsibilities" value={formData.responsibilities} onChange={handleChange} />
          <div className="date-row">
            <input name="from" placeholder="From (e.g. Jan 2022)" value={formData.from} onChange={handleChange} />
            <input name="until" placeholder="Until (e.g. Present)" value={formData.until} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-view">
          <p className="display-name">{formData.position} · {formData.company}</p>
          <p className="muted">{formData.from} – {formData.until}</p>
          <p>{formData.responsibilities}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default Experience;