import React from "react";

const Car = ({ car, totalNum, total }) => {
  let result = car.length ? (
    <p>
      共{totalNum}本 总价为{total}
    </p>
  ) : (
    <p>购物车为空</p>
  );
  return (
    <div className="col-md-6">
      <h2>购物车</h2>
      <ul>
        {car.map((item, index) => {
          return (
            <li key={index}>
              {item.title} 价格为: {item.price} 已选择{item.number}本
            </li>
          );
        })}
      </ul>
      {result}
    </div>
  );
};

export default Car;
