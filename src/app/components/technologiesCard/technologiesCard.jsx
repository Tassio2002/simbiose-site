import "./styles/style.css";

const TechnologiesCard = ({ title }) => {
  return (
    <div className="cardSection">
      <span className="title">{title}</span>
      <div className="techCard">
        <div className="content">
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
