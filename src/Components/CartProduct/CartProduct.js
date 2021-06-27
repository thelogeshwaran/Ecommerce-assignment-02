import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./CartProduct.css";
import Button from "@material-ui/core/Button";
import { useProductProvider } from "../../Context/ProductProvider";

function Product({ data }) {
  const { state, dispatch } = useProductProvider();

  return (
    <div className="cartCard">
      <Card style={{ height: "100%" }}>
        <CardActionArea>
          <div className="cartMedia">
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
        <div className="cart-buttons">
          <div className="cart-btn">
            {" "}
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                dispatch({ action: "DECREMENT_QTY", payload: data })
              }
            >
              -
            </Button>
          </div>
          {data.count}
          <div className="cart-btn">
            {" "}
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                dispatch({ action: "INCREMENT_QTY", payload: data })
              }
            >
              +
            </Button>
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch({ action: "SAVE_FOR_LATER", payload: data })
            }
          >
            Save for later
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch({ action: "REMOVE_FROM_CART", payload: data })
            }
          >
            Remove
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Product;
