import { NavLink } from "../NavLink";
import data from "@/app/data/global-components.json";

const MobileNavBar = () => {
  const navData = data.nav;
  return (
    <div className="mobile-nav">
      <ul>
        {navData.navLinks.map((link) => (
          <NavLink key={link.name} href={link.href} name={link.name} />
        ))}
      </ul>
    </div>
  );
};

export default MobileNavBar;
