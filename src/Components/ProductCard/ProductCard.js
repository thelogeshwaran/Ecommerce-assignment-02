import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./ProductCard.css";
import Button from "@material-ui/core/Button";
import { useProductProvider } from "../../Context/ProductProvider";
import { Link } from "react-router-dom";

function Product({ data }) {
  const { state, dispatch } = useProductProvider();
  const [added, setAdded] = useState(false);
  function addtoCart() {
    dispatch({ action: "ADD_TO_CART", payload: data });
  }

  useEffect(() => {
    const cartData = state.cart.filter((item) => item.id === data.id);
    const saveLaterData = state.saveLater.filter((item) => item.id === data.id);

    cartData.length > 0 || saveLaterData.length > 0
      ? setAdded(true)
      : setAdded(false);
  }, [state.cart]);

  return (
    <div className="card">
      <Card style={{ height: "100%" }}>
        <CardActionArea>
          <div className="cardMedia">
            <img className="cardImage" src={data.image}></img>
          </div>
          <CardContent>
            <div>
              <div>
                <h3>{data.title.substring(0, 25) + "..."}</h3>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <div className="card-content">
          <div>{data.description.substring(0, 55) + "..."}</div>
          <div className="card-price">
            <b>{"₹ " + data.price}</b>
          </div>
          <div className="card-data">
            <div>
              Size: <b>{data.size}</b>
            </div>
            <div>
              For: <b>{data.category}</b>
            </div>
          </div>
        </div>
        <div>
          {added ? (
            <Link to="/cart" className="nav-link">
              <Button variant="contained" color="primary">
                Go to cart
              </Button>
            </Link>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => addtoCart()}
            >
              Add to cart
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Product;
