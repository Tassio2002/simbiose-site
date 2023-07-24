import "./styles/style.css";
import Image from "next/image";
import data from "@/app/data/global-components.json";

const HighlightBtn = () => {
  const btnData = data.highlightBtn;
  return (
    <>
      <button className="highlightBtn">
        Contato
        <Image src={btnData.icon} width={20} height={10} alt="Right Arrow" />
      </button>
    </>
  );
};

export default HighlightBtn;
