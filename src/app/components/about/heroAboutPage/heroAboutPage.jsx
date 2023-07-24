import ContentBox from "./contentBox/contentBox";
import "./styles/style.css";
import VideoComponent from "./videoComponent/videoComponent";

const HeroAboutPage = () => {
  return (
    <div className="heroAboutPage">
      <div className="videoWrapper">
        <VideoComponent />
      </div>
      <div className="contentWrapper">
        <ContentBox />
      </div>
    </div>
  );
};

export default HeroAboutPage;
