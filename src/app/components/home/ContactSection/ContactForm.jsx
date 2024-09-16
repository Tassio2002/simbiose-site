import { useState } from "react";
import "./styles/style.css";
import data from "@/app/data/home.json";
import dataButton from "@/app/data/global-components.json";
import Image from "next/image";
import InputMask from "react-input-mask";

const ContactForm = ({ titleForm }) => {
  const buttonData = dataButton.globalButton;

  const formData = data.home.contato.form.background;
  const style = {
    background: {
      backgroundImage: `url(${formData}#060922)`,
    },
  };

  const [emailSent, setEmailSent] = useState(false);

  function sendedFlow() {
    setEmailSent(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const values = {
      name: event.target[0].value,
      email: event.target[1].value,
      phone: event.target[2].value,
      message: event.target[3].value,
    };

    try {
      await fetch("/api/contact", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((response) => (response.status === 200 ? sendedFlow() : ""));
    } catch (error) {
      console.log(error);
    }
  };

  if (emailSent) {
    return (
      <div className="form-container-post-shipment">
        <div>
          <h2 className={"postShipmentTitle"}>Agradecemos o contato!</h2>
          <h3 className={"postShipmentText"}>
            Estaremos retornando o mais breve possível.
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-container">
        <form style={style.background} onSubmit={handleSubmit}>
          <h2>{titleForm ? titleForm : "Tem alguma dúvida?"}</h2>
          <input type="text" placeholder="* Nome" required />
          <input type="email" placeholder="* E-mail" required />
          <InputMask
            mask={"(99) 9 9999-9999"}
            maskChar=""
            placeholder="Telefone"
          >
            {(inputProps) => <input {...inputProps} type="tel" required />}
          </InputMask>
          <textarea
            className="inputMsg"
            cols="30"
            rows="6"
            placeholder="* Conte como podemos ajudá-lo."
            required
          ></textarea>
          <button type={"submit"} className="form-btn button-container">
            <p>Enviar</p>
            <Image src={buttonData.icon} width={17} height={8} alt={"Icon"} />
          </button>
        </form>
      </div>
    );
  }
};

export default ContactForm;
