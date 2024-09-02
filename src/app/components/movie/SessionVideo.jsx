const SessionVideo = ({ src, alt, text, title }) => {
  return (
    <div className="max-w-[1375px] w-full mx-auto py-5 md:py-16 flex flex-col items-center">
      <iframe
        width="660"
        height="375"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        alt={alt}
        className="flex rounded w-screen md:w-[660px] md:p-0 p-5 bg-cover"
      ></iframe>

      <a
        href="/"
        className="button-container w-fit mt-5 md:mt-10 py-2.5 px-4 md:py-5 md:px-8 max-w-none font-semibold"
      >
        Clique aqui para saber mais sobre nós!
      </a>
    </div>
  );
};

export default SessionVideo;
