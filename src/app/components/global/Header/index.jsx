import "./styles/style.css";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import { DropdownMenuContextProvider } from "@/app/data/DropdownMenuContext";

const Header = ({ children, background }) => {
  const headerStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <header style={headerStyle}>
      <Container>
        <>
          <DropdownMenuContextProvider>
            <NavBar />
          </DropdownMenuContextProvider>
          {children}
        </>
      </Container>
    </header>
  );
};

export default Header;
