import "./styles/style.css";
import data from "@/app/data/home.json";
import dataButton from "@/app/data/global-components.json";
import Image from "next/image";

const ContactForm = () => {

  const buttonData = dataButton.globalButton;

  const formData = data.home.contato.form.background;
  const style = {
    background: {
      backgroundImage: `url(${formData}#060922)`,
    },
  };

  function sendedFlow() {
    return console.log("Ação após o envio");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const values = {
      'name': event.target[0].value,
      'email': event.target[1].value,
      'phone' : event.target[2].value,
      'message': event.target[3].value

    }

    try {
      await fetch("/api/contact", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(response =>
        response.status === 200 ? sendedFlow() : ''
      )
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <form style={style.background} onSubmit={handleSubmit}>
        <h2>Tem alguma dúvida?</h2>
        <input type="text" placeholder="* Nome" />
        <input type="email" placeholder="* E-mail" />
        <input type="tel" placeholder="Telefone" />
        <textarea
          cols="30"
          rows="6"
          placeholder="* Conte como podemos ajudá-lo."
        ></textarea>
        <button type={'submit'} className="form-btn button-container">
          <p>Enviar</p>
          <Image src={buttonData.icon} width={17} height={8} alt={"Icon"} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
