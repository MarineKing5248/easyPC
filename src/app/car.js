import React from "react";

const Car = ({ car, totalNum, total }) => {
  let result = car.length ? (
    <p>
      items:{totalNum} sum:{total}
    </p>
  ) : (
    <p>Your Cart is empty!</p>
  );
  return (
    <div className="col-md-6">
      <h2>Cart:</h2>
      <ul>
        {car.map((item, index) => {
          return (
            <li key={index}>
              {item.title} sum: {item.price} already chose {item.number} items
            </li>
          );
        })}
      </ul>
      {result}
    </div>
  );
};

export default Car;
