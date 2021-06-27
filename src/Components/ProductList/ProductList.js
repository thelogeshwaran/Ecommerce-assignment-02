import React from "react";
import Product from "../ProductCard/ProductCard";
import "./ProductList.css";
import { useProductProvider } from "../../Context/ProductProvider";

function ProductList() {
  const { data } = useProductProvider();
  const finalData = data;

  return (
    <div className="productList">
      {finalData &&
        finalData.map((data) => (
          <div>
            <Product data={data} />
          </div>
        ))}
    </div>
  );
}

export default ProductList;
