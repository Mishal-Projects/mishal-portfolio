import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      link: '#'
    },
    {
      title: 'Blockchain Developer Certification',
      issuer: 'Blockchain Council',
      link: '#'
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      link: '#'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      link: '#'
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">🏆 Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a 
            key={index} 
            href={cert.link} 
            className="cert-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>{cert.title}</h4>
            <p>{cert.issuer}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
