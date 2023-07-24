import "./styles/style.css";

const VideoComponent = () => {
  return (
    <>
      <iframe
        width="660"
        height="375"
        src="https://www.youtube.com/embed/UJYGxmVa_u4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default VideoComponent;
