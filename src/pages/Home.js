import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="title">IEEE Communications Society</h1>
        <h3 className="chapter">Technical Student Chapter, VIT Vellore</h3>
        
        <div className="description">
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
          <button className="know-more-btn">Know more</button>
        </div>
      </div>

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
              VIT was established with the aim of providing quality higher education on par with international standards. 
              It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. 
              The campus has a cosmopolitan atmosphere with students from all corners of the globe. 
              Experienced and learned teachers are strongly encouraged to nurture the students. 
              The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence.
            </p>
            <p>
              The University is headed by its founder and Chancellor, Dr. G. Viswanathan, 
              a former Parliamentarian and Minister in the Tamil Nadu Government.
               In recognition of his service to India in offering world class education, 
               he was conferred an honorary doctorate by the West Virginia University, USA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

