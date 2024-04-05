import { useState } from "react";
import styles from "./Card.module.css";
import { viewSelector } from "../../redux/Reducers/viewReducer";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartSelector } from "../../redux/Reducers/cartReducer";

const stars = [1, 2, 3, 4, 5];

export default function Card({ product, index }) {
  const dispatch = useDispatch();

  const heart = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png";
  const heartFill = "https://cdn-icons-png.flaticon.com/128/4926/4926592.png";

  const { card } = useSelector(viewSelector);
  const { showCart } = useSelector(cartSelector);

  // If product is not found empty element is returned.
  if (!product) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      {card === "Premium" ? (
        <></>
      ) : (
        <div
          className={styles.heart}
          onClick={() => {
            if (showCart) {
              if (window.confirm("Are you sure you want to delete? "))
                dispatch(cartActions.deleteFromCart(index));
            } else {
              dispatch(cartActions.addTocart(product));
            }
          }}
        >
          <img src={showCart ? heartFill : heart} alt="Heart" />
        </div>
      )}

      {/* Image container */}
      <div className={styles.imgContainer}>
        <img src={product.image} className={styles.img} />
      </div>

      {/* Title, the size of title is set to 30 characters */}
      <span className={styles.title}>
        {card === "Standard"
          ? product.title
          : product.title.substring(0, 30) + "..."}
      </span>

      {/* Container for price and Tag. Conditional Rednering is done such that is the card is for cart page, quantity buttons is shown else category is shown */}
      <div className={styles.priceTag}>
        {card === "Standard" ? (
          <></>
        ) : (
          <span className={styles.tag}>
            {product.category[0].toUpperCase() + product.category.substring(1)}
          </span>
        )}
        <h4 className={styles.price}>${product.price}</h4>
      </div>

      <div className={styles.stars}>
        {card === "Standard" ? (
          <div className={styles.standardStar}>
            {product.rating.rate}
            <i class="fa-solid fa-star"></i>
          </div>
        ) : (
          stars.map((rate, index) => {
            return (
              <img
                key={index}
                className={styles.star}
                src={
                  rate <= product.rating.rate
                    ? "https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    : "https://cdn-icons-png.flaticon.com/128/1828/1828970.png"
                }
              />
            );
          })
        )}
        <span style={{ marginLeft: "5px" }}>
          {product.rating.count} Reviews
        </span>
      </div>

      {/* On conditional rendering, if cart is true, delete button is shown else add to cart button is shown */}

      {card === "Standard" ? (
        <></>
      ) : !showCart ? (
        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(cartActions.addTocart(product))}
        >
          Add To Cart
        </button>
      ) : (
        <button
          className={styles.removeBtn}
          type="button"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete? "))
              dispatch(cartActions.deleteFromCart(index));
          }}
        >
          Remove From Cart
        </button>
      )}
    </div>
  );
}
