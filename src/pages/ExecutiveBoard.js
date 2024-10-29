import '../styles/ExecutiveBoard.css';

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
              <div className="member-card">
                <img src="/photos/DR._Thanikaiselvan_V-(Faculty_Coordinator).jpg" alt="Faculty Coordinator" />
                <div className="member-info">
                  <h3>Dr. Thanikaiselvan V</h3>
                  <p>Faculty Coordinator</p>
                </div>
              </div>
              <div className="member-card">
                <img src="/photos/Dr._Renuga_Devi_S-(Faculty_Coordinator).jpg" alt="Faculty Coordinator" />
                <div className="member-info">
                  <h3>Dr. Renuga Devi S</h3>
                  <p>Faculty Coordinator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Members - Row 1 */}
          <div className="core-members-row">
            <div className="member-card">
              <img src="/photos/Aditya_Mani-(Chairperson).jpg" alt="Chairperson" />
              <div className="member-info">
                <h3>Aditya Mani</h3>
                <p>Chairperson</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Arish-(Secretary).jpg" alt="Secretary" />
              <div className="member-info">
                <h3>Arish</h3>
                <p>Secretary</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Aditya_Menon-(Vice_Chairperson).jpg" alt="Vice Chairperson" />
              <div className="member-info">
                <h3>Aditya Menon</h3>
                <p>Vice-Chairperson</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Kavi_Rohith_M-(Co-Secretary).jpg" alt="Co-Secretary" />
              <div className="member-info">
                <h3>Kavi Rohith M</h3>
                <p>Co-Secretary</p>
              </div>
            </div>
          </div>

          {/* Domain Heads - Row 2 */}
          <div className="domain-heads-row">
            <div className="member-card">
              <img src="/photos/Srishti_Shukla-(Technical_Head).jpg" alt="Technical Head" />
              <div className="member-info">
                <h3>Srishti Shukla</h3>
                <p>Technical Head</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Gurpreet_Singh-(Design_Head).jpg" alt="Design Head" />
              <div className="member-info">
                <h3>Gurpreet Singh</h3>
                <p>Design Head</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Akash_Manikantan-(Editorial_Head).jpg" alt="Editorial Head" />
              <div className="member-info">
                <h3>Akash Manikantan</h3>
                <p>Editorial Head</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Jiya_Sugla-(Finance_Head).jpg" alt="Finance Head" />
              <div className="member-info">
                <h3>Jiya Sugla</h3>
                <p>Finance Head</p>
              </div>
            </div>
          </div>

          {/* PR and Projects Heads - Row 3 */}
          <div className="pr-projects-row">
            <div className="member-card">
              <img src="/photos/Aniruddh_Russiya-(PR_&_Publicity_Head).jpg" alt="PR & Publicity Head" />
              <div className="member-info">
                <h3>Aniruddh Russiya</h3>
                <p>PR & Publicity Head</p>
              </div>
            </div>

            <div className="member-card">
              <img src="/photos/Shoumik_Adhikary-(Projects_Head).jpg" alt="Projects Head" />
              <div className="member-info">
                <h3>Shoumik Adhikary</h3>
                <p>Projects Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveBoard;
