"use client";
import "./styles/style.css";
import data from "@/app/data/conquista.json";
import { Jost } from "next/font/google";
import Title from "@/app/components/global/SectionCongratulations";
const jost = Jost({ subsets: ["latin"] });
import Link from "next/link";
import Image from "next/image";

export default function CapturePage() {
  const background = data.capturePage.background;
  const logo = data.capturePage.logo;

  return (
    <div className={` ${jost.className} bg-background  min-w-full`}>
      <div className="flex flex-col  pt-2.5 xl:pt-5 items-center gap-2.5 xl:gap-5 ">
        <div className="flex flex-row items-center justify-center w-full p-5 z-50 ">
          <Link target="_blank" href="/">
            <Image
              className="max-w-[200px] xl:max-w-none"
              src={logo}
              alt="Logo Simbiose"
              width={285}
              height={50}
            />
          </Link>
        </div>
      </div>{" "}
      <Title background={background}></Title>
    </div>
  );
}
