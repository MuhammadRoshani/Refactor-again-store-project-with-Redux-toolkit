import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  // this method below access to all store values and we can select whatever we want.

  const addedToCart = useSelector((store) => store.addedToCart);

  return (
    <nav>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p className="bag">
        <Link to="/cart">
          <BsCart4 color="white" size="30px" />
        </Link>
        {addedToCart > 0 && <span>{addedToCart}</span>}
      </p>
    </nav>
  );
}

export default Navbar;
