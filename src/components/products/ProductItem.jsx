import { useDispatch } from "react-redux";
import "./ProductItem.css";
import { addToCart } from "../../Redux/slice";

function ProductItem(data) {
  // we need access to information our products that user click on that by destructuring and give it to our dispatch to send our data to reducer.

  // action.data :
  const { id, name, price, image } = data;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // actions : dispatch send our actions and payload to reducer.
    // in real data is our payload.
    dispatch(addToCart(data));
  };

  return (
    <div className="productCard">
      <div className="cardImage">
        <img className="img-fluid" src={image} />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">price : {price.toLocaleString()}</p>
        <button onClick={addToCartHandler} className="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
