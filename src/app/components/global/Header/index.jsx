import "./styles/style.css";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";

const Header = ({ children, background }) => {
  const headerStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <header style={headerStyle}>
      <Container>
        <NavBar />
        {children}
      </Container>
    </header>
  );
};

export default Header;
