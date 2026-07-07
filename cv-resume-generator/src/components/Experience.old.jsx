import { useState } from 'react';
import '../styles/Card.css';

const blankExperience = {
  company: '',
  position: '',
  responsibilities: '',
  from: '',
  until: '',
  isEditing: true
};

function Experience({ data, onSave }) {
  const initialItems = data.length
    ? data.map((item) => ({ ...item, isEditing: false }))
    : [{ ...blankExperience }];

  const [items, setItems] = useState(initialItems);

  function handleChange(index, e) {
    const { name, value } = e.target;
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [name]: value };
      return next;
    });
  }

  function handleSave(index, e) {
    e.preventDefault();
    setItems((prev) => {
      const next = prev.map((item, i) => (i === index ? { ...item, isEditing: false } : item));
      onSave(next.map(({ isEditing, ...rest }) => rest));
      return next;
    });
  }

  function handleEdit(index) {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, isEditing: true } : item)));
  }

  function handleAdd() {
    setItems((prev) => [...prev, { ...blankExperience }]);
  }

  function handleRemove(index) {
    setItems((prev) => {
      const next = prev.filter((_, i) => i !== index);
      const final = next.length ? next : [{ ...blankExperience }];
      onSave(final.map(({ isEditing, ...rest }) => rest));
      return final;
    });
  }

  return (
    <section className="card">
      <h2>Work Experience</h2>
      {items.map((item, index) => (
        <div key={index} className="experience-item">
          {item.isEditing ? (
            <form onSubmit={(e) => handleSave(index, e)}>
              <input
                name="company"
                placeholder="Company name"
                value={item.company}
                onChange={(e) => handleChange(index, e)}
              />
              <input
                name="position"
                placeholder="Position title"
                value={item.position}
                onChange={(e) => handleChange(index, e)}
              />
              <textarea
                name="responsibilities"
                placeholder="Main responsibilities"
                value={item.responsibilities}
                onChange={(e) => handleChange(index, e)}
              />
              <div className="date-row">
                <input
                  name="from"
                  placeholder="From (e.g. Jan 2022)"
                  value={item.from}
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  name="until"
                  placeholder="Until (e.g. Present)"
                  value={item.until}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="form-actions">
                <button type="submit">Save</button>
                {items.length > 1 && (
                  <button type="button" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="display-view">
              <p className="display-name">{item.position} · {item.company}</p>
              <p className="muted">{item.from} – {item.until}</p>
              <p>{item.responsibilities}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAdd} className="add-item-btn">
        Add another experience
      </button>
    </section>
  );
}

export default Experience;
