import { Card } from "@/app/components/card/Card";
import Link from "next/link";
import "./styles/style.css"

export default function Home() {
  return (
    <>
      <h1 className="title">Hello NextJS</h1>
      <Link href="/servicos" className="btn_blue">Ir para serviços</Link>
      <Link href="/sobre" className="btn_blue">Ir para sobre</Link>
      <Card />
    </>
  );
}
