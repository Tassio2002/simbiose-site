import Button from "../../global/Button/Button";
import "./styles/style.css";
import data from "@/app/data/home.json";

const ContactForm = () => {
  const formData = data.home.contato.form.background;
  const style = {
    background: {
      backgroundImage: `url(${formData}#060922)`,
    },
  };
  return (
    <div className="form-container">
      <form style={style.background}>
        <h2>Tem alguma dúvida?</h2>
        <input type="text" placeholder="* Nome" />
        <input type="email" placeholder="* E-mail" />
        <input type="tel" placeholder="Telefone" />
        <textarea
          cols="30"
          rows="6"
          placeholder="* Conte como podemos ajudá-lo."
        ></textarea>
        <div className="form-btn">
          <Button text="Enviar" link="/" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
