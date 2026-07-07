import { useState } from 'react';
import '../styles/Card.css';

function Education({ data, onSave }) {
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
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="school" placeholder="School name" value={formData.school} onChange={handleChange} />
          <input name="title" placeholder="Title of study" value={formData.title} onChange={handleChange} />
          <input name="date" placeholder="Date of study (e.g. 2020 – 2024)" value={formData.date} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-view">
          <p className="display-name">{formData.school}</p>
          <p>{formData.title}</p>
          <p className="muted">{formData.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default Education;