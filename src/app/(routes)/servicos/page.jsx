import "./styles/style.css";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <h1 className="title">Servicos</h1>
      <Link href="/" className="btn_blue">
        Voltar
      </Link>
    </>
  );
}
