import "./styles/style.css";
import Container from "../Container/Container";
import data from "@/app/data/home.json";
import NavBar from "../NavBar/NavBar";

const Header = ({ children }) => {
  const background = data.home.hero.background;

  const headerStayle = {
    background: `url(${background}) #060922 no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <header style={headerStayle}>
      <Container>
        <NavBar />
        {children}
      </Container>
    </header>
  );
};

export default Header;
