import React from "react";
import products from "../data/products.json";

export default function Rough() {
  return (
    <>
      <div className="mt-5">
        {products.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
