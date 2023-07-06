import "./styles/style.css";
import data from "@/app/data/home.json";
import Image from "next/image";

const EnterpriseName = () => {
  const enterpriseData = data.home.hero.leftDiv.enterprise;
  const assets = {
    point: enterpriseData.point,
    name: enterpriseData.name,
  };
  return (
    <div className="enterprise-name">
      <Image src={assets.point} width={6} height={6} alt="point" />
      <span>{assets.name}</span>
      <Image src={assets.point} width={6} height={6} alt="point" />
    </div>
  );
};

export default EnterpriseName;
