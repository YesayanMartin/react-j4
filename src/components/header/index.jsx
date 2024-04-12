import menuList from "../../utils/constant";
import preMenu from "./premenu";
import "./style.css";

function Header() {
  return (
    <div className="headerBlock">
      <div className="preHeader">
        <ul>
          {preMenu.map(({ path, name }, INDEX) => {
            return (
              <li key={INDEX}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="basicHeader">
        <ul>
          {menuList.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
