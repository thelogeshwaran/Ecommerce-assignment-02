import React from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="heading">
          <h1>Flipzon</h1>
        </div>
        <div className="button_groups">
          <div className="btn">
            <Link to="/" className="nav-link">
              <Button variant="contained" color="secondary">
                Home
              </Button>
            </Link>
          </div>
          <div className="btn">
            <Link to="/cart" className="nav-link">
              <Button variant="contained" color="secondary">
                Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
