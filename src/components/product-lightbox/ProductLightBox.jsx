import classNames from "classnames";
import { useState } from "react";

import ShowBox from "../showbox/ShowBox";
import ThumbNail from "../thumbnail/ThumbNail";

import styles from "./ProductLightBox.module.css";

function ProductLightBox({ products }) {
  const initialProduct = products[0];
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  const handleClick = (id) => {
    const product = products.find((product) => product.id == id);
    setSelectedProduct(product);
  };

  return (
    <div className={classNames(styles["product-lightbox"])}>
      <ShowBox productImg={selectedProduct.product} />
      <ul className={classNames(styles["thumbnail-list"])}>
        {products.map((product) => {
          return (
            <li key={product.id} onClick={() => handleClick(product.id)}>
              <ThumbNail
                thumbNail={product.thumbNail}
                isSelected={product.id == selectedProduct.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductLightBox;
