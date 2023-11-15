import axios from "axios";
import {useState} from "react";

import style from "./Product.module.css";

function Product({product}) {
  const {title, stock, condition, price, image} = product;
  const [quantity, setQuantity] = useState(1);

  const purchaseHandler = () => {
    axios
      .post("http://localhost:3001/purchase", {...product, quantity})
      .then((response) => {
        window.location.href = response.data.init_point;
      })
      .catch((error) => console.log(error));
  };

  const addProductHandler = () => {
    stock > 1 && quantity < stock
      ? setQuantity(quantity + 1)
      : alert("Ya no hay mas en stock");
  };

  const removeProductHandler = () => {
    quantity > 1
      ? setQuantity(quantity - 1)
      : alert("Al menos debes agregar 1 articulo");
  };

  return (
    <div className={style.container}>
      <img src={image} alt={title} />

      <div className={style.content}>
        <h2>{title}</h2>
        <p>Stock: {stock}</p>
        <p>Condition: {condition}</p>
        <h3>${price}</h3>
        <p>QTY: {quantity}</p>

        <div className={style.buttons}>
          <button onClick={removeProductHandler}>-</button>
          <button onClick={purchaseHandler}>Purchase</button>
          <button onClick={addProductHandler}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
