const SessionVideo = ({ src, alt, text, title }) => {
  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <iframe
        width="660"
        height="375"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        alt={alt}
        className="flex rounded-lg w-screen h-64 md:h-[375px] md:w-[660px] md:p-0 px-5 bg-cover"
      ></iframe>

      <a
        href="#formulario"
        className="button-container w-fit mt-5 md:mt-10 py-2.5 px-4 md:py-5 md:px-8 max-w-none font-semibold"
      >
        Quero uma consultoria gratuita
      </a>
    </div>
  );
};

export default SessionVideo;
