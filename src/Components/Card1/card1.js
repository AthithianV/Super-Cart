import styles from "./card1.module.css";

const stars = [1, 2, 3, 4, 5];

export default function Card1({ product }) {
  // If product is not found empty element is returned.
  if (!product) {
    return <></>;
  }
  return (
      <div className={styles.card}>
        {/* Image container */}
        <div className={styles.imgContainer}>
          <img src={product.image} className={styles.img} />
        </div>

        {/* Title, the size of title is set to 30 characters */}
        <span className={styles.title}>
          {product.title.substring(0, 30)}...
        </span>

        {/* Container for price and Tag. Conditional Rednering is done such that is the card is for cart page, quantity buttons is shown else category is shown */}
        <div className={styles.priceTag}>
          <span className={styles.tag}>
            {product.category[0].toUpperCase() + product.category.substring(1)}
          </span>
          <h4 className={styles.price}>${product.price}</h4>
        </div>

        <div className={styles.stars}>
          {stars.map((rate, index) => {
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
          })}
        </div>

        {/* On conditional rendering, if cart is true, delete button is shown else add to cart button is shown */}

        <button className={styles.btn} type="button">
          Add To Cart
        </button>
      </div>
  );
}
