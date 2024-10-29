import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      {/* Top Card Section */}
      <div className="about-card">
        <h2 className="section-title">
          ABOUT US
          <span className="diamond-left"></span>
          <span className="diamond-right"></span>
        </h2>
        <div className="team-image">
          <img src="../photos/Comsoc_group-photo.jpg" alt="IEEE ComSoc Team" />
        </div>
        <div className="about-description">
          <p>
            IEEE Communications Society (IEEE ComSoc) is one of the finest technical chapters of VIT Vellore and 
            the team members contribute new ideas and information to our collective knowledge, developing 
            higher industry standards, and changing the way we all communicate, for the better. Society 
            promotes technological innovation and fosters creation and sharing of information among the global 
            technical community. The Society provides services to members for their technical and professional 
            advancement and forums for technical exchanges among professionals in academia, industry, and 
            public institutions. To bring the world together in harmony through communications and networking 
            technology research, application, education, and incubation of new ideas. Society members can 
            participate in the development and implementation of standards in the communications field in 
            areas such as network management and optical communications. The chapter consists of 200+ 
            active members who are extremely talented and result oriented students. We have conducted 
            multiple events in and out of our college and have achieved remarkable success in all the events.
          </p>
        </div>
      </div>

      {/* Mission and Vision Sections */}
      <div className="mission-vision-container">
        <div className="mission-section">
          <div className="mission-content">
            <div className="target-icon">
              <img src="../Aboutuspng/Mission.png" alt="Mission" />
            </div>
            <div className="text-content">
              <h2 className="section-title">
                OUR MISSION
                <span className="diamond-left"></span>
                <span className="diamond-right"></span>
              </h2>
              <p>
              The IEEE Communications Society at VIT promotes technological innovation and fosters creation and sharing of information among 
              the global technical community. The Society provides services to members for their technical and professional advancement 
              and forums for technical exchanges among professionals in academia, industry, and public institutions.
              </p>
            </div>
          </div>
        </div>

        <div className="vision-section">
          <div className="vision-content">
            <div className="eye-icon">
              <img src="../Aboutuspng/Vision.png" alt="Vision" />
            </div>
            <div className="text-content">
              <h2 className="section-title">
                OUR VISION
                <span className="diamond-left"></span>
                <span className="diamond-right"></span>
              </h2>
              <p>
              To bring the world together in harmony through communications and 
              networking technology research, application, education, and incubation of new ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Domains Section */}
      <div className="domains-section">
        <div className="title-container">
            <center>
                <h2 className="section-title">
                    DOMAINS
                    <span className="diamond-left"></span>
                    <span className="diamond-right"></span>
                </h2>
            </center>
        </div>
        <div className="domains-grid">
          <div className="domain-card">
            <img src="/domains/technical.png" alt="Technical" className="domain-icon" />
            <h3>TECHNICAL</h3>
          </div>
          <div className="domain-card">
            <img src="/domains/design.png" alt="Design" className="domain-icon" />
            <h3>DESIGN</h3>
          </div>
          <div className="domain-card">
            <img src="/domains/editorial.png" alt="Editorial" className="domain-icon" />
            <h3>EDITORIAL</h3>
          </div>
          <div className="domain-card">
            <img src="/domains/finance.png" alt="Finance" className="domain-icon" />
            <h3>FINANCE</h3>
          </div>
          <div className="domain-card">
            <img src="/domains/management.png" alt="Management" className="domain-icon" />
            <h3>MANAGEMENT</h3>
          </div>
          <div className="domain-card">
            <img src="/domains/marketing.png" alt="Marketing" className="domain-icon" />
            <h3>MARKETING</h3>
          </div>
        </div>
      </div>

      {/* Add this after the domains-section */}
      <div className="about-vit-section">
        <div className="about-vit-card">
          <h2 className="section-title">
            ABOUT VIT
            <span className="diamond-left"></span>
            <span className="diamond-right"></span>
          </h2>
          <div className="vit-image">
            <img src="/TT_photo/TT_FINAL_PHOTO_27-12-2007.jpg" alt="VIT Campus" />
          </div>
          <div className="vit-description">
            <p>
              VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and
            </p>
            <p>
              adopts innovative methods to improve the quality of higher education on a consistent basis. The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students. The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence.
            </p>
            <p>
              It was established under Section 3 of the University Grants Commission (UGC) Act, 1956, and was founded in 1984 as a self-financing
            </p>
            <p>
              institution called the Vellore Engineering College. The Union Ministry of Human Resources Development conferred University status on
            </p>
            <p>
              Vellore Engineering College in 2001.
            </p>
            <p>
              The University is headed by its founder and Chancellor, Dr. G. Viswanathan, a former Parliamentarian and Minister in the Tamil Nadu Government. In recognition of his service to India in offering world class education, he was conferred an honorary doctorate
            </p>
            <p>
              by the West Virginia University, USA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
