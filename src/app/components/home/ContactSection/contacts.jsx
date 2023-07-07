import Image from "next/image";
import "./styles/style.css";

const ContactInfo = (props) => {
    return ( 
        <div className="contact-info">
            <Image src={props.src} width={74} height={74} alt="contact image" />
            <div className="infos">
                <h3>{props.title}</h3>
                <span>{props.value}</span>
            </div>
        </div>
     );
}
 
export default ContactInfo;