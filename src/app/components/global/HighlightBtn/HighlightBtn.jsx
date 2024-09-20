import "./styles/style.css";
import Image from "next/image";
import data from "@/app/data/global-components.json";

const HighlightBtn = ({ text, link }) => {
  const btnData = data.highlightBtn;
  return (
    <a href={link || "#contact-section"}>
      <button className="highlightBtn">
        {text || "Contato"}
        <Image src={btnData.icon} width={20} height={10} alt="Right Arrow" />
      </button>
    </a>
  );
};

export default HighlightBtn;
