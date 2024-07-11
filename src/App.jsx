import styles from "./App.module.css";

import classNames from "classnames";

import ProductLightBox from "./components/product-lightbox/ProductLightBox";

import { products } from "./data/products";
import ProductDescription from "./components/product-description/ProductDescription";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <section className={classNames(styles.container)}>
        <div className={classNames(styles["product-content"])}>
          <ProductLightBox products={products} />
          <ProductDescription />
        </div>
      </section>
    </Layout>
  );
}

export default App;
