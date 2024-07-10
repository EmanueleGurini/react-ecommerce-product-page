import classNames from "classnames";
import styles from "./Counter.module.css";
import IconAdd from "../icons/IconAdd";
import IconMinus from "../icons/IconMinus";

function Counter() {
  return (
    <div className={classNames(styles.counter)}>
      <button>
        <IconMinus />
      </button>
      <div>0</div>
      <button>
        <IconAdd />
      </button>
    </div>
  );
}

export default Counter;
