import "./styles/style.css";
import data from "@/app/data/capturePage.json";
import SessionVideo from "@/app/components/movie/SessionVideo";
const Title = ({ children, background }) => {
  const headerStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };

  const src = data.capturePage.videos;

  return (
    <header
      className="max-h-none xl:max-h-screen min-h-full flex flex-col w-full "
      style={headerStyle}
    >
      <div className="body-container ">
        <div className="flex-container min-h-full">
          <div className="text-white flex flex-row  max-w-[1375px] w-full min-h-[calc(100vh-109px)] md:min-h-[calc(100vh-110px)] xl:min-h-[calc(100vh-158px)] md:h-auto  items-start  mx-auto">
            <div className="flex flex-col xl:flex-row gap-1 w-full justify-center text-center">
              <div className="flex flex-col  text-center  py-5 lg:px-20 md:py-20 xl:px-5 xl:py-2.5 px-5 w-full justify-center self-center items-center mt-[140px]">
                <h1 className="text-4xl md:text-5xl xl:text-6xl w-full leading-snug xl:p-0 text-white font-bold  text-center  max-w-[640px]">
                  Obrigado pelo seu interesse{" "}
                </h1>
                <p className="text-xl md:text-2xl max-w-[450px] py-10  md:py-5">
                  Logo o nosso consultor entrará em contato para marca um
                  bate-papo com você
                </p>
                <a href="/" className="highlightBtn  mt-5 md:mt-14 flex  ">
                  Conheça a Simbiose
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Title;
