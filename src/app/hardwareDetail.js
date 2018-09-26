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
      <h2>Item Details:</h2>
      <h3>{currentItem.title}</h3>
      <p>Company:{currentItem.author}</p>
      <p>Price:{currentItem.price}</p>
      <p>Id:{currentItem.id}</p>
      <button onClick={() => addToCar(currentItem)}>Add to Cart</button>
    </div>
  );
};

export default HardwareDetail;
