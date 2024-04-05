import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import { viewSelector } from "../../redux/Reducers/viewReducer";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/Reducers/cartReducer";

export default function NavBar() {
  const { nav } = useSelector(viewSelector);
  const dispatch = useDispatch();

  return (
    <>
      {/* Navigation bar */}
      <nav className={nav === "Horizontal" ? styles.nav : styles.navRow}>
        <div className={styles.left}>
          <ul
            className={
              nav === "Horizontal" ? styles.navList : styles.navListRow
            }
          >
            {/* Logo  - on click redirect to home page*/}
            <Link
              to="/"
              className={
                nav === "Horizontal"
                  ? `${styles.navItem}`
                  : `${styles.navItem} ${styles.brandRow}`
              }
            >
              <img
                className={`${styles.icon} ${
                  nav === "Horizontal" ? styles.brandlogo : styles.brandlogoRow
                }`}
                src="https://cdn-icons-png.flaticon.com/128/2430/2430422.png"
                alt="logo"
              />
              <span className={styles.navTitle}>SuperCart</span>
            </Link>
          </ul>
        </div>
        <div className={styles.right}>
          <ul
            className={
              nav === "Horizontal" ? styles.navList : styles.navListRow
            }
          >
            <NavLink
              to="/catalog"
              className={
                nav === "Horizontal" ? styles.navItem : styles.navItemRow
              }
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
              onClick={() => dispatch(cartActions.displayCart())}
              className={
                nav === "Horizontal" ? styles.navItem : styles.navItemRow
              }
              style={(isActive) => (!isActive ? { color: "red" } : null)}
            >
              <img
                className={styles.icon}
                // style={{ marginRight: "15px" }}
                src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                alt="Cart icon"
              />
              <span className={styles.navTitle}>My Cart</span>
            </NavLink>
            <NavLink
              to="/"
              className={
                nav === "Horizontal" ? styles.navItem : styles.navItemRow
              }
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
