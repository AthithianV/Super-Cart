import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar1.module.css";

export default function HorizontalNavBar() {
  return (
    <>
      {/* Navigation bar */}
      <nav className={styles.nav}>
        <div className={styles.left}>
          <ul className={styles.navList}>
            {/* Logo  - on click redirect to home page*/}
            <Link to="/" className={`${styles.navItem}`}>
              <img
                className={`${styles.icon} ${styles.brandlogo}`}
                src="https://cdn-icons-png.flaticon.com/128/2430/2430422.png"
                alt="logo"
              />
              <span className={styles.logo}>SuperCart</span>
            </Link>
          </ul>
        </div>
        <div className={styles.right}>
          <ul className={styles.navList}>
            <NavLink
              to="/catalog"
              className={`${styles.navItem}`}
              style={(isActive) => (isActive ? { color: "red" } : null)}
            >
              <img
                className={styles.icon}
                src="https://cdn-icons-png.flaticon.com/128/15219/15219789.png"
                alt="Home icon"
              />
              <span className={styles.navTitle}>Catalog</span>
            </NavLink>
            {/* Cart */}
            <NavLink
              to="/cart"
              className={styles.navItem}
              style={(isActive) => (!isActive ? { color: "red" } : null)}
            >
              <img
                className={styles.icon}
                src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                alt="Cart icon"
              />
              <span className={styles.navTitle}>My Cart</span>
            </NavLink>
            <NavLink
              to="/"
              className={styles.navItem}
              style={(isActive) => (!isActive ? { color: "red" } : null)}
            >
              <img
                className={styles.icon}
                src="https://cdn-icons-png.flaticon.com/128/503/503849.png"
                alt="Settings icon"
              />
              <span className={styles.navTitle}>Settings</span>
            </NavLink>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
