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
    <div className={nav === "Horizontal" ? styles.col : styles.row}>
      <NavBar />
      {catalog === "Carousal" ? <Carousal /> : <PageView />}
      {showCart ? <Cart /> : <></>}
    </div>
  );
}
