import PageView from "../../Components/Catalog/PageView/PageView";
import Carousal from "../../Components/Catalog/carousal/carousal";
import { viewSelector } from "../../redux/Reducers/viewReducer";
import { useSelector } from "react-redux";
import styles from "./view.module.css";
import NavBar from "../../Components/Navbar/Navbar";
import Cart from "../cart/cart";
import { cartSelector } from "../../redux/Reducers/cartReducer";

export default function View() {
  const { nav, catalog } = useSelector(viewSelector);
  const { showCart } = useSelector(cartSelector);

  return (
    // When horizontal is chosen for nav, then col is set for call else row,
    // col class will render nav and view sections in row
    // row class will render nav and view sections in column.
    <div className={nav === "Horizontal" ? styles.col : styles.row}>
      <NavBar />
      {/* Conditional rendering for catalog. */}
      {catalog === "Carousal" ? <Carousal /> : <PageView />}
      {showCart ? <Cart /> : <></>}
    </div>
  );
}
