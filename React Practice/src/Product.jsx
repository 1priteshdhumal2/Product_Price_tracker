function Product({ title, price, features }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{price}</p>
      <h4>{features}</h4>
    </div>
  );
}

export default Product;
