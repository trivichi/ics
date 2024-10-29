import '../styles/Globe3D.css';

function Globe3D() {
  return (
    <div className="globe-container">
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Animated Hologram Earth"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/ba8225db485a4996ba58470a73074530/embed?ui_theme=dark&autostart=1&ui_controls=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_loading=0"
        />
      </div>
    </div>
  );
}

export default Globe3D;
