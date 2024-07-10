import classNames from "classnames";
import styles from "./ShowBox.module.css";

function ShowBox({ productImg }) {
  return (
    <div className={classNames(styles.showbox)}>
      <img src={productImg} />
    </div>
  );
}

export default ShowBox;
