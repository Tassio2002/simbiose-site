import "./styles/style.css";
import Image from "next/image";
import data from "@/app/data/home.json";

const MeetUs = () => {
  const meetUsData = data.home.hero.leftDiv.meetUs;
  console.log(meetUsData)
  return (
    <div className="meetUsWrapper">
      <p className="meetUsText">{meetUsData.text}</p>
      <div className="meetUsIcons">
        <Image src={meetUsData.icons.tel} width={30} height={30} alt={"Telefone Icon"} />
        <Image src={meetUsData.icons.linkedin} width={30} height={30} alt={"Linkedin Icon"} />
      </div>
    </div>
  );
};

export default MeetUs;
