import Card from "../../Components/Card/Card";
import { cartActions, cartSelector } from "../../redux/Reducers/cartReducer";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector(cartSelector);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <img
          onClick={() => dispatch(cartActions.hideCart())}
          className={styles.close}
          src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
          alt="close"
        />
        <div className={styles.header}>
          <h1>
            <i className="fa-solid fa-cart-shopping"></i> Your Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <h1 className={styles.emptyMsg}>
            <img
              className={styles.emptyIcon}
              src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png"
              alt="empty Cart"
            />
            Your cart is Empty
          </h1>
        ) : (
          <div className={styles.products}>
            {cart.map((p, index) => (
              <Card product={p} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
