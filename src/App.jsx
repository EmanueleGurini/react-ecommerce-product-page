import styles from "./App.module.css";

import classNames from "classnames";

import ProductLightBox from "./components/product-lightbox/ProductLightBox";

import { products } from "./data/products";
import ProductDescription from "./components/product-description/ProductDescription";

function App() {
  return (
    <section className={classNames(styles.container)}>
      <div className={classNames(styles["product-content"])}>
        <ProductLightBox products={products} />
        <ProductDescription />
      </div>
    </section>
  );
}

export default App;
