interface Props {
  cartProducts: string[];
  onClear: () => void;
}

const Cart = ({ cartProducts, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
