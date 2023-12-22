import React, { useRef, useEffect, useCallback } from 'react';
import './projects.css';

const Projects = () => {
  const popupRef = useRef(null);

  const toggleDescription = useCallback((event, card) => {
    event.stopPropagation();
    const projectDetailsText = card.querySelector('.project-details-text');
    const projectDescription = card.querySelector('.project-description');
    const projectPopupContent = document.getElementById('project-popup-content');

    // Populate the popup content with the project details
    projectPopupContent.innerHTML = `
      <p class='project-details-text'> ${projectDetailsText.textContent}</p>
      <p class='project-description'>Description: ${projectDescription.textContent}</p>
    `;

    // Toggle the display of the popup
    popupRef.current.style.display = popupRef.current.style.display === 'none' ? 'flex' : 'none';
  }, []);

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');

    const handleClick = (event, card) => {
      toggleDescription(event, card);
    };

    // Enable click events only for small devices
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
      projectCards.forEach((card) => {
        card.addEventListener('click', (e) => handleClick(e, card));
      });
    }

    return () => {
      // Cleanup event listeners if needed
      if (isMobile) {
        projectCards.forEach((card) => {
          card.removeEventListener('click', (e) => handleClick(e, card));
        });
      }
    };
  }, [toggleDescription]);

  // Close the popup if clicked outside the content or on the popup
  window.onclick = function (event) {
    const projectPopup = document.getElementById('project-popup');
    if (event.target === projectPopup) {
      toggleDescription(event, projectPopup);
    }
  };

  return (
    <section id='projects'>
       <div className='heading'>
        <h3>Projects</h3>
      </div>
      <div className="projects-container">
        <div className='project-card' onClick={(e) => toggleDescription(e, e.currentTarget)}>
          <h4 className='project-title'>Artificial Intelligence Integrated Blockchain for Autonomous Vehicles</h4>
          <div className='project-details'>
            <p className='project-details-text'>Skills Used: Blockchain, AI, IoT, Programming</p>
            <p className='project-description'>
              Built a decentralized network to empower autonomous vehicles with secure real-time decision-making. It combines VIoT, VANET and Blockchain to enhance communication ensuring data integrity, confidentiality, transparency, traceability, and safeguards against unauthorized access and driving autonomous vehicle adoption.
            </p>
          </div>
          <p className='project-source'>
            Project Source - <a href='https://github.com/Nagajyothi13/AI-Integrated-Blockchain-for-Autonomous-Vehicles' target='_blank' rel='noopener noreferrer'>GitHub</a>
          </p>
          
        </div>


        <div className='project-card' onClick={(e) => toggleDescription(e, e.currentTarget)} >
          <h4 className='project-title'>Topic Modelling on Telugu-English Code-Mixed data using LDA</h4>
          <div className='project-details'>
            <p className='project-details-text'>Skills Used: Python (NumPy, Pandas, Matplotlib, Scikit-learn, genism, nltk, corpus, re, string, etc.), Web Scraping, Math</p>
            <p className='project-description'>
              The aim of the project is to discover, from a corpus of documents, good word distributions of the various topics, as well as good topic proportions in the various documents.
            </p>
          </div>
          <p className='project-source'>
            Project Source - <a href='https://github.com/Nagajyothi13/Topic_modeling_on_telugu_english_code_mixed_data_using_lda' target='_blank' rel='noopener noreferrer'>GitHub</a>
          </p>
      </div>


      <div className='project-card' onClick={(e) => toggleDescription(e, e.currentTarget)}>
        <h4 className='project-title'>React Portfolio</h4>
        <div className='project-details'>
          <p className='project-details-text'>Skills Used: HTML, CSS, React</p>
          <p className='project-description'>
            A dynamic portfolio showcasing my expertise in frontend development, blockchain, and software engineering. Explore my projects and skills, a testament to my commitment to cutting-edge technologies and creative problem-solving.
          </p>
        </div>
        <p className='project-source'>
          Project Source - <a href='https://github.com/Nagajyothi13/portfolio' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      </div>


      <div className='project-card' onClick={(e) => toggleDescription(e, e.currentTarget)}>
        <h4 className='project-title'>Flower Cart</h4>
        <div className='project-details'>
          <p className='project-details-text'>Skills Used: Html, Css, JavaScript</p>
          <p className='project-description'>
          This is frontend website contains flowers with price and buy button. If user clicks Buy button then the item will be added to the shopping cart. If user clicks pay button then the selected items will be deleted from the website.
          </p>
        </div>
        <p className='project-source'>
          Project Source - <a href='https://github.com/Nagajyothi13/Flower-Cart' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      </div>
      <div id='project-popup' className='project-popup' ref={popupRef}>
            <div id='project-popup-content' className='project-popup-content'></div>
          </div>
    </div>
    </section>
  );
};

export default Projects;
