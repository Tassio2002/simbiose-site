import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/style.css";

export const NavLink = (props) => {
  const pathname = usePathname();

  const isActtive = pathname.endsWith(props.href);

  return (
    <li key={props.name} className={`teste ${isActtive ? "active" : ""}`}>
      <Link key={props.name} href={props.href}>
        {isActtive ? `${props.name} +` : `${props.name}`}
      </Link>
    </li>
  );
};
