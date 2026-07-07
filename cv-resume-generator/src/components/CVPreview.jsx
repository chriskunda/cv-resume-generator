import { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import '../styles/CVPreview.css';

const templates = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate
};

function CVPreview({ personalInfo, education, experience }) {
  const [selected, setSelected] = useState('modern');
  const previewRef = useRef(null);
  const TemplateComponent = templates[selected];

  async function handleDownloadPDF() {
    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${personalInfo.name || 'my-cv'}.pdf`);
  }

  return (
    <section className="preview-section">
      <h2>Choose a style</h2>
      <div className="template-picker">
        {Object.keys(templates).map((key) => (
          <button
            key={key}
            className={key === selected ? 'active' : ''}
            onClick={() => setSelected(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div className="preview-frame">
        <div ref={previewRef}>
          <TemplateComponent personalInfo={personalInfo} education={education} experience={experience} />
        </div>
      </div>

      <button className="download-btn" onClick={handleDownloadPDF} disabled={!personalInfo.name}>
        Download as PDF
      </button>
    </section>
  );
}

export default CVPreview;