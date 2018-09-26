import React from "react";

const HardwareList = ({ items, listClick }) => {
  return (
    <div className="col-md-2">
      <h2>Hardware:</h2>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id} onClick={() => listClick(item)}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HardwareList;
