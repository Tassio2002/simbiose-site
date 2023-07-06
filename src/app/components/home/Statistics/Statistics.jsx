import "./styles/style.css";
import data from "@/app/data/home.json";
import Container from "../../global/Container/Container";
import StatCard from "../../statCard/statCard";

const Statistics = () => {
  const StatisticsData = data.home.estatisticas;

  const Background = {
    backgroundImage: `url(${StatisticsData.background})`,
  };

  return (
    <div className="statistics-section" style={Background}>
      <Container>
        <div className="statics-cards-container">
          {StatisticsData.cards.map((item, index) => {
            return (
              <StatCard
                key={index}
                icon={item.icon}
                number={item.number}
                title={item.title}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
