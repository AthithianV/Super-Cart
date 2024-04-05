import { useRef } from "react";
import styles from "./carousal.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewSelector } from "../../../redux/viewReducer";
import Standard from "../../Cards/Standard/Standard";
import Premium from "../../Cards/Premium/Premium";
import {
  getProducts,
  productActions,
  productSelector,
} from "../../../redux/productReducer";

export default function Carousal() {
  const sliderRef = useRef();
  const dispatch = useDispatch();

  const { page, items_per_page, products } = useSelector(productSelector);
  const { card } = useSelector(viewSelector);

  // Hook to set items per page.
  useEffect(() => {
    const items_per_page = getComputedStyle(sliderRef.current).getPropertyValue(
      "--items-per-screen"
    );
    dispatch(productActions.setItemsPerPage(items_per_page));
  }, []);

  // Hook to set the --slider-index property when page is changed and also to get products.
  useEffect(() => {
    const items = items_per_page * (page + 1);
    if (items <= 20) {
      dispatch(getProducts(items_per_page * (page + 1)));
    }
    sliderRef.current.style.setProperty("--slider-index", page);
  }, [dispatch, page]);

  return (
    <div className={styles.main}>
      <div className={styles.slider} ref={sliderRef}>
        {products.map((p, index) =>
          card === "Standard" ? (
            <Standard key={index} product={p} />
          ) : (
            <Premium key={index} product={p} />
          )
        )}
      </div>
      <div className={styles.page}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(productActions.decrementPage());
          }}
        >
          <img
            className={styles.img}
            src="https://cdn-icons-png.flaticon.com/128/189/189254.png"
            alt="prev"
          />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(productActions.incrementPage());
          }}
        >
          <img
            className={styles.img}
            src="https://cdn-icons-png.flaticon.com/128/189/189253.png"
            alt="next"
          />
        </button>
      </div>
    </div>
  );
}
