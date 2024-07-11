import classNames from "classnames";
import styles from "./Header.module.css";

const menu = [
  {
    title: "collection",
    route: "/collection",
  },
  {
    title: "men",
    route: "/men",
  },
  {
    title: "women",
    route: "/women",
  },
  {
    title: "about",
    route: "/about",
  },
  {
    title: "contact",
    route: "/contact",
  },
];

function Header() {
  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.logo)}>
        <h1>sneakers</h1>
      </div>
      <div className={classNames(styles.menu)}>
        <ul>
          {menu.map((m, index) => {
            return <li key={`${m.title}-${index}`}>{m.title}</li>;
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
