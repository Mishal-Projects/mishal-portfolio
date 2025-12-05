import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Bhindi HQ',
      duration: '2024 - Present',
      responsibilities: [
        'Building innovative AI-powered solutions and automation tools',
        'Developing full-stack applications with React, Node.js, and modern technologies',
        'Implementing blockchain integrations and Web3 features',
        'Collaborating with cross-functional teams to deliver high-quality products'
      ]
    },
    {
      title: 'Blockchain Developer',
      company: 'Freelance',
      duration: '2023 - 2024',
      responsibilities: [
        'Developed smart contracts using Solidity for Ethereum and EVM-compatible chains',
        'Built decentralized applications (dApps) with Web3.js and Ethers.js',
        'Implemented DeFi protocols and NFT marketplaces',
        'Conducted security audits and optimized gas efficiency'
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">💼 Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <span className="duration">{exp.duration}</span>
            </div>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
