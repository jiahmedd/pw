import React, { useRef, useState } from 'react';


const Home = () => {
  // Create references for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null); 
  const contactRef = useRef(null); 

  const clubs = [
    "STEMinists", 
    "Girls Who Code", 
    "WOC in STEM",
    "Muslim Student Association",
    "Treasurer - Somali Student Association"
  ]; 
 
  const experiences = [
    { title: "Software Engineer Intern", company: "Akira Technologies", location: "Washington, DC", date: "July 2024 - December 2024"}, 
    { title: "Substitute Teacher", compant: "Fairfax County Public Schools", location: "Falls Church, VA", date: "April 2024 - Present"}, 
  ]; 

  const [activeTab, setActiveTab] = useState(null);
  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  // Scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align to the top of the section
    });
  };

  return (
    <div className = "port" style={{ backgroundColor: '#F6F1EA' }}>
      {/* Navigation Bar */}
      <div className="nav-bar">
        <button 
          className="about-button" 
          onClick={() => scrollToSection(aboutRef)}>
          ABOUT
        </button>
        <button 
          className="projects-button" 
          onClick={() => scrollToSection(projectsRef)}>
          PROJECTS
        </button>
        <button
          className="skills-button"
          onClick={() => scrollToSection(skillsRef)}>
          SKILLS
          </button>
        <button
          className="contact-button"
          onClick={() => scrollToSection(contactRef)}>
          CONTACT
        </button>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Name */}
        <div className="name">
          <h1 className="my-name-text" >
            JIHAN AHMED
          </h1>
        </div>
      </div>

      {/* About Me Section */}
      <div ref={aboutRef} className="section" style={{  marginLeft: '100px', fontFamily: 'Space mono', }}>
        <h1>About Me</h1>
        <div className="about-me-section">
          {/* Left Container */}
          <div className="left-container">
            {/*About Me Summary */}
            <div className="about-me-text">
              <p style={{ fontSize: '1.5rem', width: '60%' }}>
                
              </p>
              <p style={{ fontSize: '1.5rem', width: '60%' }}>
               
              </p>
            </div> 
            
            {/*Education Section in About Me Tab */}
            <div className = "education"> 
            <div className = "history">
              <h2>Education</h2>
              <p>George Mason University</p>
              <p style={{ fontSize: '1rem' }}>Bachelors of Science, Computer Science</p> 
              <i style={{ fontSize: '1rem' }}>August 2022 - December 2024</i>
              <div className="education-buttons">
              <div className="button-container">
                <button
                  className={`Extracurriculars ${activeTab === 'extracurriculars' ? 'active' : ''}`}
                  onClick={() => toggleTab('extracurriculars')}>
                  EXTRACURRICULARS
                </button>
                {activeTab === 'extracurriculars' && (
                  <div className="dropdown-content">
                    <h3>Clubs & Organizations</h3>
                    <ul>
                      {clubs.map((club, index) => (
                        <li key={index}>{club}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="button-container">
                <button
                  className={`Leadership ${activeTab === 'leadership' ? 'active' : ''}`}
                  onClick={() => toggleTab('leadership')}>
                  LEADERSHIP
                </button>
                {activeTab === 'leadership' && (
                  <div className="dropdown-content">
                    <h3>Leadership Roles</h3>
                    <ul>
                      <li>Treasurer - Somali Student Association</li>
                      <i>August 2023 - December 2024</i>
                      <p> Oversaw financial transactions, maintained accurate records, and reported on financial status to members and Mason Funding.</p>
                      <p>Conducted research on local pricing to create budget reports and requests for organizational activities and events.</p>
                    </ul>
                  </div>
                )}
              </div>
            </div>
              <p>Northern Virginia Community College</p> 
              <p style={{ fontSize: '1rem' }}>Associates of Science, Engineering</p>
              <i style={{ fontSize: '1rem' }}>August 2020 - May 2022</i>
            </div>
            </div>
            <div className = "experience">
              <h2>Experience</h2>
              <div className = "work-history"> 
                  <div className = "workItem">
                    <p>Akira Technologies</p>
                    <p>Washington, DC</p>
                    <p>Software Engineer Intern</p>
                    <p>July 2024 - December 2024</p>
                  </div>
                  <div className = "workItem">
                    <p>Fairfax County Public Schools</p>
                  </div>
                  
              </div>
            </div> 
          </div>
        </div>
      </div>
      
  <div ref={projectsRef} className="section" style={{ marginLeft: '100px', marginRight: '100px', fontFamily: 'Space mono'}}>
  <h1>Projects</h1>
  <div className="projects-container"  >
    {/* ANDROID Jewelry Management System Project */}
    <div className="project">
      <img src="/jewelry-database.png" alt="Jewelry Database App" />
      <p>Android: Jewelry Store Management App</p>
      <div className= "lang">
        <img src= "/android-studio-logo.svg" style={{height: '20px'}}/>
        <img src= "/java.svg"/>
      </div>
      <div className = "buttons">
      <button 
      className="github-link"
      onClick={() => window.open("https://github.com/jiahmedd/inventory-app", "_blank")}>
      GitHub
      </button>
      <button
        className = "github-link">
        Download APK
      </button>
      </div>
    </div>

    {/* ANDROID To-do List */}
    <div className="project">
      <img src="/to-do.png" alt="To-Do List App" />
      <p>Android: To-Do List</p>
      <div className= "lang">
        <img src= "/android-studio-logo.svg" style={{height: '20px'}}/>
        <img src= "/java.svg"/>
      </div>
      <div className = "buttons">
      <button 
      className="github-link"
      onClick={() => window.open("https://github.com/jiahmedd/Android-To-Do-List-", "_blank")}>
      GitHub
      </button>
      <button
        className = "github-link">
        Download APK
      </button>
      </div>
    </div>

    {/* Poodle Website */ } 
    <div className = "project"> 
    <img src = "/poodle.png" /> 
    <p> "Poodle" Google Search </p>
    <div className= "lang">
        <img src= "/html-1.svg"/>
        <img src= "/css-3.svg"/>
      </div>
    <button 
      className="github-link"
      onClick={() => window.open("https://github.com/jiahmedd/poodle-395", "_blank")}>
      GitHub
      </button>
    </div>

    {/* PLUTUS */}
    <div className = "project">
      <img src = "/plutus.png" />
      <p> Plutus Budget App </p>
      <div className = "lang"> 
        <img src = "/react-2.svg"/>
        <img src= "/html-1.svg"/>
        <img src= "/css-3.svg"/>
        <img src= "javascript-1.svg" />
        <img src = "/mongodb-icon-1.svg" />
      </div>
      <button 
      className="github-link"
      onClick={() => window.open("https://github.com/KalebHedrick/PlutusFrontEnd", "_blank")}>
      GitHub
      </button>
    </div>
  </div>
  </div>

  <div ref={skillsRef} className="section" style={{ margin: '100px', fontFamily: 'Space mono'}}>
    <div className = "skills-container"> 
      <h1>SKILLS</h1>
      <div className = "technical-languages">
        <h3>Technical Languages</h3>
        <img src= "/sql-database-generic-svgrepo-com.svg" style = {{height: '10vh', marginRight: '10vh'}}/>
        <img src= "/java-4.svg" style = {{height: '10vh', marginRight: '10vh'}}></img>
        <img src= "/python-5.svg" style ={{height: '10vh', marginRight: '10vh'}}></img>
        <img src= "/c-1.svg" style={{height: '10vh', marginRight: '10vh'}}></img>
        <img src= "/html-1.svg" style={{height: '10vh', marginRight: '10vh'}}/>
        <img src= "/css-3.svg" style={{height: '10vh', marginRight: '10vh'}}/>
        <img src= "javascript-1.svg" style={{height: '10vh', marginRight: '10vh'}}/>
      </div>
      <div className = "frameworks-tools">
        <h3>Technical Frameworks & Tools </h3>
        <img src = "/react-2.svg" style = {{height: '10vh', marginRight: '10vh'}}/>
        <img src = "/aws-2.svg" style = {{height: '10vh', marginRight: '10vh'}}/>
        <img src = "/nodejs-1.svg" style = {{height: '10vh', marginRight: '10vh'}}/>
        <img src = "/mongodb-icon-1.svg" style = {{height: '10vh', marginRight: '10vh'}}/>
        <img src = "/git.svg" style = {{height: '10vh', marginRight: '10vh'}}/>
        <img src = "/figma-icon.svg" style = {{height: '10vh', marginRight: '10vh'}}/>

      </div>
    </div>
  </div>

  <div ref={contactRef} className= "section" style={{margin: '100px', marginTop: '50vh', fontFamily: 'Space mono'}}>
    <div className = "contact-imgs"> 
      <img src = '/github-icon.svg' style = {{height: '5vh', marginRight: '10vh'}}></img>
      <img src = '/linkedin-icon-2.svg' style = {{height: '5vh', marginRight: '10vh'}}></img>
      <img src = '/email-1-svgrepo-com.svg' style = {{height: '5vh', marginRight: '10vh'}}></img>
    </div>

  </div>
  </div>
  );
};

export default Home;
