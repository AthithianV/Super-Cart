import { useRef, useState } from "react";
import Card1 from "../Card1/card1";
import styles from "./carousal.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productActions,
  productSelector,
} from "../../redux/productReducer";

export default function Carousal({ products }) {
  const sliderRef = useRef();
  const prevRef = useRef();
  const nextRef = useRef();
  const dispatch = useDispatch();

  const { page, items_per_page, products } = useSelector(productSelector);

  useEffect(() => {
    const items_per_page = getComputedStyle(sliderRef.current).getPropertyValue(
      "--items-per-screen"
    );
    dispatch(productActions.setItemsPerPage(items_per_page));
  }, []);

  useEffect(() => {
    sliderRef.current.style.setProperty("--slider-index", page);
  }, [page]);

  useEffect(() => {
    const items = items_per_page * (page + 1);
    if (items <= 20) {
      dispatch(getProducts(items_per_page * (page + 1)));
    }
  }, [dispatch, page]);

  return (
    <div className={styles.main}>
      <div className={styles.slider} ref={sliderRef}>
        {products.map((p, index) => (
          <Card1 key={index} product={p} />
        ))}
      </div>
      <div className={styles.page}>
        <button
          className={styles.btn}
          ref={prevRef}
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
          ref={nextRef}
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
