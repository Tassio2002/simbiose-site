import "./styles/style.css";

const VideoComponent = () => {
  return (
    <>
      <iframe
        width="660"
        height="375"
        src="https://www.youtube.com/embed/CYP2X-w_KAk?si=reInqCESkobX4hrL?&amp;theme=dark&amp;autohide=2&amp;modestbranding=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoComponent;
