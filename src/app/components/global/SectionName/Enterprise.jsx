import "./styles/style.css";
import data from "@/app/data/home.json";
import Image from "next/image";

const SectionName = (props) => {
  const enterpriseData = data.home.hero.leftDiv.enterprise;
  const assets = {
    point: enterpriseData.point,
  };
  return (
    <div className={`enterprise-name ${props.color}`} >
      <Image src={assets.point} width={6} height={6} alt="point" />
      <span>{props.name}</span>
      <Image src={assets.point} width={6} height={6} alt="point" />
    </div>
  );
};

export default SectionName;
