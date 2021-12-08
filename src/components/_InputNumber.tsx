import useCart from "@/lib/useCart";
import { CartItem } from "@/types";
import styles from "../scss/InputNumber.module.scss";

interface _InputNumberProps {
  product: CartItem;
}

export default function _InputNumber({ product }: _InputNumberProps) {
  const { addToCart, deleteFromCart } = useCart();

  return (
    <div className="input-group">
      <span className="input-group-btn">
        <button
          onClick={() => deleteFromCart(product.productId)}
          type="button"
          className={styles.button_min}
        >
          <i className="bi bi-dash"></i>
        </button>
      </span>
      <input
        disabled
        value={product.quantity}
        type="text"
        className={styles.input_form}
      />
      <span className="input-group-btn">
        <button
          onClick={() => addToCart(product)}
          type="button"
          className={styles.button_plus}
        >
          <i className="bi bi-plus"></i>
        </button>
      </span>
    </div>
  );
}
