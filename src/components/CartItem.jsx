export default function CartItem({ item }) {
  return (
    <li className="cart-item">
      <p>NAME + QTY * Price</p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>QTY</span>
        <button>+</button>
      </p>
    </li>
  );
}
