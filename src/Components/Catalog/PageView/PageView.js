import { useEffect, useState } from "react";
import {
  getProducts,
  productSelector,
} from "../../../redux/Reducers/productReducer";
import Card from "../../Card/Card";
import styles from "./PageView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { viewSelector } from "../../../redux/Reducers/viewReducer";

export default function PageView() {
  const [page, setPage] = useState(1);
  const { catalog } = useSelector(viewSelector);
  const { products } = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(page * 4));
  }, [dispatch, page]);

  return (
    <div
      className={`${styles.main} ${
        catalog === "ViewAll" ? styles.setVertical : null
      }`}
    >
      <div className={styles.cards}>
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      {page * 4 < 20 ? (
        <div
          className={styles.more}
          onClick={() => {
            if (page * 4 <= 20) setPage(page + 1);
          }}
        >
          <span className={styles.arrow}>
            <i className="fa-solid fa-arrow-down"></i>
          </span>
          Show More
        </div>
      ) : (
        <div className={styles.more}>End reached</div>
      )}
    </div>
  );
}
