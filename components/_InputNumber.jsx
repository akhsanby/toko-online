import styles from "../scss/InputNumber.module.scss";

export default function _InputNumber() {
  return (
    <div className="input-group">
      <span className="input-group-btn">
        <button type="button" className={styles.button_min}>
          <i className="bi bi-dash"></i>
        </button>
      </span>
      <input type="text" className={styles.input_form} />
      <span className="input-group-btn">
        <button type="button" className={styles.button_plus}>
          <i className="bi bi-plus"></i>
        </button>
      </span>
    </div>
  );
}
