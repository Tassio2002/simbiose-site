import "./styles/style.css";

const SessionVideo = ({ src, alt, text, title }) => {
  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <iframe
        width="660"
        height="375"
        src={src}
        alt={alt}
        title="YouTube video player"
        allowFullScreen
        className="flex rounded-lg w-screen h-64 md:h-[375px] md:w-[660px] md:p-0 px-5 bg-cover"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <a
        href="#formulario"
        className="highlightBtn xl:hidden flex  mt-5 md:mt-10 "
      >
        Quero uma consultoria gratuita
      </a>
    </div>
  );
};

export default SessionVideo;
