import '../styles/Globe3D.css';

function Globe3D() {
  return (
    <div className="globe-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src="/globe_video/3129957-hd_1920_1080_25fps (1).mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Globe3D;
