import styles from "./App.module.css";

import classNames from "classnames";
import { useState } from "react";

import ProductLightBox from "./components/product-lightbox/ProductLightBox";

import { products } from "./data/products";
import ProductDescription from "./components/product-description/ProductDescription";
//import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import Button from "./components/button/Button";
import IconCart from "./components/icons/IconCart";

function App() {
  const [cart, setCart] = useState({
    id: self.crypto.randomUUID(),
    name: "Nike AirMax",
    count: 0,
  });
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      {cart.count}
      <section className={classNames(styles.container)}>
        <div className={classNames(styles["product-content"])}>
          <ProductLightBox products={products} />
          <ProductDescription>
            {" "}
            <Counter
              count={counter}
              onAdd={() => setCounter(counter + 1)}
              onMin={() => setCounter(counter - 1)}
            />
            <Button
              onClick={() =>
                setCart((prevState) => {
                  return { ...prevState, count: counter };
                })
              }
            >
              <IconCart />
            </Button>
          </ProductDescription>
        </div>
      </section>
    </>
  );
}

export default App;
