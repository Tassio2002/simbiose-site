import "./styles/style.css";
import data from "@/app/data/servicos.json";
import Button from "@/app/components/global/Button/Button";
import Image from "next/image";

const ServiceMainContent = (props) => {
    const serviceData = data.servicos
    const btnProps = serviceData.contractButton
    return ( 
        <main className="main-service">
            <div className="main-service-info">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <Button text={btnProps.text} link={btnProps.link} icon={btnProps.icon} />
            </div>
            <div className="main-service-image">
                <Image src={props.src} alt={props.title} width={600} height={500} />
            </div>
        </main>
     );
}
 
export default ServiceMainContent;