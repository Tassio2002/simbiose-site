import Container from "../components/global/Container/Container";
import NavBar from "../components/global/NavBar/NavBar";

export default function pagesLayout({ children }) {
  return (
    <div className="bg-background">
      <Container>
        <NavBar />
        {children}
      </Container>
    </div>
  );
}
