import "./styles/style.css";
import Image from "next/image";
import Link from "next/link";
import data from "@/app/data/global-components.json";

const Button = ({ text, link, icon }) => {
  const buttonData = data.globalButton;

  return (
    <Link href={link}>
      <div className="button-container">
        <button className="button">{text}</button>
        {icon && (
          <Image src={buttonData.icon} width={17} height={8} alt={"Icon"} />
        )}
      </div>
    </Link>
  );
};

export default Button;
