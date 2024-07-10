import styles from "./App.module.css";

import classNames from "classnames";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";

const products = [
  {
    id: self.crypto.randomUUID(),
    thumbNail: "./src/assets/images/image-product-1-thumbnail.jpg",
    product: "./src/assets/images/image-product-1.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    thumbNail: "./src/assets/images/image-product-2-thumbnail.jpg",
    product: "./src/assets/images/image-product-2.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    thumbNail: "./src/assets/images/image-product-3-thumbnail.jpg",
    product: "./src/assets/images/image-product-3.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    thumbNail: "./src/assets/images/image-product-4-thumbnail.jpg",
    product: "./src/assets/images/image-product-4.jpg",
  },
];

function App() {
  return (
    <section className={classNames(styles.container)}>
      <div className={classNames(styles["product-content"])}>
        <ProductLightBox products={products} />
        <div className={classNames(styles["product-description"])}>
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
      </div>
    </section>
  );
}

export default App;
