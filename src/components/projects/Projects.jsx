import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects'>
       <div className='heading'>
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
      <div className='project-card'>
        <h3 className='project-title'>Artificial Intelligence Integrated Blockchain for Autonomous Vehicles</h3>
        <p className='project-details'>
          Skills Used: Blockchain, AI, IoT, Programming
        </p>
        <p className='project-details'>
        Built a decentralized network to empower autonomous vehicles with secure real-time decision-making. This technology combines VIoT, VANET and Blockchain to enhance communication ensuring data integrity, confidentiality, transparency, traceability, and safeguards against unauthorized access and driving autonomous vehicle adoption.
        </p>
        <p className='project-source'>
          Project Source - <a href='https://github.com/Nagajyothi13/AI-Integrated-Blockchain-for-Autonomous-Vehicles' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      </div>

      <div className='project-card'>
        <h3 className='project-title'>Topic Modelling on Telugu-English Code-Mixed data using LDA</h3>
        <p className='project-details'>
          Skills Used: Python (NumPy, Pandas, Matplotlib, Scikit-learn, genism, nltk, corpus, re, string, etc.), Web Scraping, Math
        </p>
        <p className='project-details'>
        The aim of learning is to discover, from a corpus of documents, good word distributions of the various topics, as well as good topic proportions in the various documents Most of the Topic Modelling techniques applied on English, Hindi, Telugu, Hindi-English code-mixed dataBut there is no proper work on “Telugu-English” code-mixed data. 
        </p>
        <p className='project-source'>
          Project Source - <a href='https://github.com/Nagajyothi13/Topic_modeling_on_telugu_english_code_mixed_data_using_lda' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      </div>

      <div className='project-card'>
        <h3 className='project-title'>React Portfolio</h3>
        <p className='project-details'>
          Skills Used: 
          HTML, CSS, React
        </p>
        <p className='project-details'>
        Built a decentralized network to empower autonomous vehicles with secure real-time decision-making. This technology combines VIoT, VANET and Blockchain to enhance communication ensuring data integrity, confidentiality, transparency, traceability, and safeguards against unauthorized access and driving autonomous vehicle adoption.
        </p>
        
        <p className='project-source'>
          Project Source - <a href='https://github.com/Nagajyothi13/Topic_modeling_on_telugu_english_code_mixed_data_using_lda' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      </div>

      <div className='project-card'>
        <h3 className='project-title'>Topic Modelling on Telugu-English Code-Mixed data using LDA</h3>
        <p className='project-details'>
          Skills Used: Python (NumPy, Pandas, Matplotlib, Scikit-learn, genism, nltk, corpus, re, string, etc.), Web Scraping, Math
        </p>
        <p className='project-details'>
        Built a decentralized network to empower autonomous vehicles with secure real-time decision-making. This technology combines VIoT, VANET and Blockchain to enhance communication ensuring data integrity, confidentiality, transparency, traceability, and safeguards against unauthorized access and driving autonomous vehicle adoption.
        </p>
        <p className='project-source'>
          Project Source - <a href='https://github.com/Nagajyothi13/Topic_modeling_on_telugu_english_code_mixed_data_using_lda' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      </div>
      </div>

      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;
