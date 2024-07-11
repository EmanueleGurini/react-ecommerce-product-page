import classNames from "classnames";

import styles from "./ProductDescription.module.css";

import Counter from "../counter/Counter";
import Button from "../button/Button";
import IconCart from "../icons/IconCart";

function ProductDescription() {
  return (
    <div className={classNames(styles["product-description"])}>
      <div className={classNames(styles["product-description__header"])}>
        <h2>Sneaker company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div className={classNames(styles["product-description__bio"])}>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
      </div>
      <div className={classNames(styles["product-description__price"])}>
        <p>
          $ 125.00{" "}
          <span className={classNames(styles["price--discount"])}>50%</span>
        </p>
        <p>
          <span className={classNames(styles["line-through"])}>250.00</span>
        </p>
      </div>
      <div className={classNames(styles["product-description__cart"])}>
        <Counter />
        <Button>
          <IconCart />
        </Button>
      </div>
    </div>
  );
}

export default ProductDescription;
