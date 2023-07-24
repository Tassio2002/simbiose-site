import "./styles/style.css";
import data from "@/app/data/about.json";
import SLogo from "../../../../../../public/SLogo.png";
import Image from "next/image";

const ContentBox = () => {
  const aboutData = data.aboutPage.hero;
  return (
    <div className="content-box">
      <span className="content-box-enterprise">
        <Image src={SLogo} width={60} height={60} alt={"Simbiose Logo"} />
        imbiose Ventures
      </span>
      <span className="content-box-title">{aboutData.title}</span>
      <span className="content-box-description">{aboutData.description}</span>
    </div>
  );
};

export default ContentBox;
