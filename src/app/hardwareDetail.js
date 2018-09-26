import React from "react";

const HardwareDetail = ({ currentItem, addToCar }) => {
  if (!currentItem)
    return (
      <div className="col-md-4">
        <h2>Selected Item:</h2>
      </div>
    );
  return (
    <div className="col-md-4">
      <h2>图书详情</h2>
      <h3>{currentItem.title}</h3>
      <p>作者:{currentItem.author}</p>
      <p>价格:{currentItem.price}</p>
      <p>编号:{currentItem.id}</p>
      <button onClick={() => addToCar(currentItem)}>放进购物车</button>
    </div>
  );
};

export default HardwareDetail;
