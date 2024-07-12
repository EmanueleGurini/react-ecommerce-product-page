import classNames from "classnames";
import styles from "./Counter.module.css";
import IconAdd from "../icons/IconAdd";
import IconMinus from "../icons/IconMinus";

function Counter({ onAdd, count, onMin }) {
  return (
    <div className={classNames(styles.counter)}>
      <button onClick={onMin}>
        <IconMinus />
      </button>
      <div>{count}</div>
      <button onClick={onAdd}>
        <IconAdd />
      </button>
    </div>
  );
}

export default Counter;
