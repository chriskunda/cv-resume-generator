import { useState } from 'react';
import '../styles/Card.css';

function PersonalInfo({ data, onSave }) {
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
      <h2>Personal Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input name="phone" type="tel" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-view">
          <p className="display-name">{formData.name}</p>
          <p>{formData.email} · {formData.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default PersonalInfo;