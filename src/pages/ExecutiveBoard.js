import '../styles/ExecutiveBoard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const memberSocials = {
  'Kavi Rohith M': {
    instagram: 'https://www.instagram.com/kavi_.rohith.m/',
    linkedin: 'https://www.linkedin.com/in/kavi-rohith-m-481761264/'
  },
  'Aditya Menon': {
    linkedin: 'https://www.linkedin.com/in/adityahmenon'
  },
  'Akash Manikantan': {
    instagram: 'https://www.instagram.com/..akash_._/',
    linkedin: 'https://www.linkedin.com/in/akash-manikantan-n-888336328'
  },
  'Aditya Mani': {
    instagram: 'https://www.instagram.com/adi.tya_mani/',
    linkedin: 'https://www.linkedin.com/in/aditya-mani-666550198/'
  },
  'Gurpreet Singh': {
    instagram: 'https://www.instagram.com/callmeguri/',
    linkedin: 'https://www.linkedin.com/in/gurpreet-singh-491a54247'
  },
  'Arish': {
    instagram: 'https://www.instagram.com/arish_palani',
    linkedin: 'https://www.linkedin.com/in/arish-p-82982a255'
  },
  'Shoumik Adhikary': {
    instagram: 'https://www.instagram.com/shoumik.adhikary/',
    linkedin: 'https://www.linkedin.com/in/shoumik-adhikary-a28390238/'
  },
  'Jiya Sugla': {
    instagram: 'https://www.instagram.com/jiya_sugla/',
    linkedin: 'https://www.linkedin.com/in/jiya-sugla-458186277'
  },
  'Srishti Shukla': {
    instagram: 'https://www.instagram.com/https__srishti/',
    linkedin: 'https://www.linkedin.com/in/srishti-shukla28/'
  },
  'Aniruddh Russiya': {
    instagram: 'https://www.instagram.com/rusiya_aniruddh/',
    linkedin: 'https://www.linkedin.com/in/aniruddh-rusiya-346a4a252'
  }
};

const MemberCard = ({ name, role, image, isFaculty = false }) => {
  const socials = memberSocials[name];

  return (
    <div className="member-card">
      <img src={image} alt={name} />
      <div className="member-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      {!isFaculty && socials && (
        <div className="member-overlay">
          <div className="social-links">
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function ExecutiveBoard() {
  return (
    <div className="executive-board">
      <div className="board-container">
        {/* Wrap the intro content in a new div */}
        <div className="board-intro">
          <div className="team-photo-section">
            <img 
              src="../photos/Comsoc_group-photo.jpg" 
              alt="Executive Board Team" 
              className="team-photo"
            />
          </div>

          <h1 className="board-title">
            EXECUTIVE BOARD OF DIRECTORS 24-25
          </h1>

          <p className="board-description">
            As board members, we work meticulously with unwavering passion, work ethic and dedicatedly 
            to advance the mission of IEEE Communications Society in VIT with chapter members.
          </p>
        </div>

        {/* Board members section remains the same */}
        <div className="board-members">
          {/* Faculty Coordinator - Top Center */}
          <div className="faculty-member">
            <div className="faculty-row">
              <MemberCard 
                name="Dr. Thanikaiselvan V" 
                role="Faculty Coordinator" 
                image="/photos/DR._Thanikaiselvan_V-(Faculty_Coordinator).jpg" 
                isFaculty
              />
              <MemberCard 
                name="Dr. Renuga Devi S" 
                role="Faculty Coordinator" 
                image="/photos/Dr._Renuga_Devi_S-(Faculty_Coordinator).jpg" 
                isFaculty
              />
            </div>
          </div>

          {/* Core Members - Row 1 */}
          <div className="core-members-row">
            <MemberCard 
              name="Aditya Mani" 
              role="Chairperson" 
              image="/photos/Aditya_Mani-(Chairperson).jpg"
            />

            <MemberCard 
              name="Arish" 
              role="Secretary" 
              image="/photos/Arish-(Secretary).jpg"
            />

            <MemberCard 
              name="Aditya Menon" 
              role="Vice-Chairperson" 
              image="/photos/Aditya_Menon-(Vice_Chairperson).jpg"
            />

            <MemberCard 
              name="Kavi Rohith M" 
              role="Co-Secretary" 
              image="/photos/Kavi_Rohith_M-(Co-Secretary).jpg"
            />
          </div>

          {/* Domain Heads - Row 2 */}
          <div className="domain-heads-row">
            <MemberCard 
              name="Srishti Shukla" 
              role="Technical Head" 
              image="/photos/Srishti_Shukla-(Technical_Head).jpg"
            />

            <MemberCard 
              name="Gurpreet Singh" 
              role="Design Head" 
              image="/photos/Gurpreet_Singh-(Design_Head).jpg"
            />

            <MemberCard 
              name="Akash Manikantan" 
              role="Editorial Head" 
              image="/photos/Akash_Manikantan-(Editorial_Head).jpg"
            />

            <MemberCard 
              name="Jiya Sugla" 
              role="Finance Head" 
              image="/photos/Jiya_Sugla-(Finance_Head).jpg"
            />
          </div>

          {/* PR and Projects Heads - Row 3 */}
          <div className="pr-projects-row">
            <MemberCard 
              name="Aniruddh Russiya" 
              role="PR & Publicity Head" 
              image="/photos/Aniruddh_Russiya-(PR_&_Publicity_Head).jpg"
            />

            <MemberCard 
              name="Shoumik Adhikary" 
              role="Projects Head" 
              image="/photos/Shoumik_Adhikary-(Projects_Head).jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveBoard;
