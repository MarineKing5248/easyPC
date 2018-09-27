import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Car = ({
  car,
  totalNum,
  total,
  pcie,
  sata,
  heat,
  overClockHeat,
  power,
  overClockPower
}) => {
  let result = car.length ? (
    <div>
      <p>
        items:{totalNum} sum:{total}
        PCIE:{pcie} SATA:{sata}
        Heat:{heat}W {""} overClockHeat:{overClockHeat}W power:{power}W{""}
        overClockPower:{overClockPower}W
      </p>
    </div>
  ) : (
    <p>You havn't begun your plan!</p>
  );

  return (
    <div className="col-md-6">
      <h2>Indicator:</h2>
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

      <div>
        <h2>Proceed to pay</h2>
        <Link className="proceed" to="/checkout">
          <img className="proceedicon" src={"/headericon/headericon.png"} />
        </Link>
      </div>
    </div>
  );
};
export default Car;
