import { useSelector } from "react-redux";
import "./Cart.css";
import ProductItemInCart from "./ProductItemInCart";

function Cart() {
  // for handle waring in console section and prevent to rerendering components , we just bring outside addedProduct and review our length of addedProduct in JSX
  const addedProducts = useSelector((store) => store.addedProducts);

  return (
    <div className="cartContainer">
      {addedProducts.length > 0 ? (
        <>
          {addedProducts.map((product) => (
            <ProductItemInCart key={product.id} {...product} />
          ))}
        </>
      ) : (
        <p>The shopping cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
