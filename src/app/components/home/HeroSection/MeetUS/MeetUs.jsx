import "./styles/style.css";
import Image from "next/image";
import data from "@/app/data/home.json";
import Link from "next/link";

const MeetUs = () => {
  const meetUsData = data.home.hero.leftDiv.meetUs;
  return (
    <div className="meetUsWrapper">
      <p className="meetUsText">{meetUsData.text}</p>
      <div className="meetUsIcons">
        <Link
          href="https://www.instagram.com/simbiose.ventures/"
          target="_blank"
        >
          <Image
            src={meetUsData.icons.instagram}
            width={30}
            height={30}
            alt={"Instagram Icon"}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/company/simbioseventures/"
          target="_blank"
        >
          <Image
            src={meetUsData.icons.linkedin}
            width={30}
            height={30}
            alt={"Linkedin Icon"}
            href=""
          />
        </Link>
      </div>
    </div>
  );
};

export default MeetUs;
