import React, { useEffect, useState } from "react";
import "./CartPage.css";
import CartProduct from "../../Components/CartProduct/CartProduct";
import { useProductProvider } from "../../Context/ProductProvider";
import { Link } from "react-router-dom";
import SaveLaterProduct from "../../Components/SaveLaterProduct/SaveLaterProduct";
import Card from "@material-ui/core/Card";

function CartPage() {
  const { state } = useProductProvider();
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let itemCount = 0;
    let totalPrice = 0;
    state.cart.map((item) => {
      itemCount += 1;
      item.count === 1
        ? (totalPrice += parseInt(item.price))
        : (totalPrice += parseInt(item.price) * item.count);
    });
    setCount(itemCount);
    setTotalPrice(totalPrice);
  }, [state]);
  return (
    <div className="cartPage">
      <div className="productList">
        <div className="cart-Header">
          <h2>Cart</h2>
        </div>
        {state.cart.length > 0 ? (
          state.cart.map((item) => {
            return (
              <div>
                <CartProduct data={item} />
              </div>
            );
          })
        ) : (
          <div className="empty-page">
            You Cart is Empty!
            <div>
              <Link to="/"> Clik here to purchase</Link>
            </div>
          </div>
        )}
        <div className="cart-Header">
          <h2>Save Later</h2>
        </div>
        {state.saveLater &&
          state.saveLater.map((item) => {
            return (
              <div>
                <SaveLaterProduct data={item} />
              </div>
            );
          })}
      </div>

      <div className="totalCard">
        <Card style={{ height: "100%" }}>
          <div>
            <h3>Price Details</h3>
            <div className="totalItems">
              <div>
                <h3>Total Items</h3>
              </div>
              <div>
                <h3>{count}</h3>
              </div>
            </div>
            <div className="totalItems">
              <div>
                <h3>Delivery Charge</h3>
              </div>
              <div className="delivery">
                <h3>Free</h3>
              </div>
            </div>
            <hr></hr>
            <div className="totalItems">
              <div>
                <h3>Total Price</h3>
              </div>
              <div>
                <h3>₹ {totalPrice}</h3>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CartPage;
