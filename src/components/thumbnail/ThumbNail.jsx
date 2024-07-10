import classNames from "classnames";
import styles from "./ThumbNail.module.css";

function ThumbNail({ thumbNail, isSelected = false, handleSelect }) {
  return (
    <div
      className={classNames(styles.thumbNail, isSelected && styles.selected)}
      onClick={handleSelect}
    >
      <img src={thumbNail} />
      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
}

export default ThumbNail;