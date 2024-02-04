import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <ul className="nav-links">
      {links.map(({ text, path, icon }) => {
        return (
          <li key={text}>
            <NavLink
              to={path}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSidebar}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
