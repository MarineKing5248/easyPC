import React, { Component } from "react";

import HardwareList from "./hardwareList";
import HardwareDetail from "./hardwareDetail";
import Car from "./Car";

class Builder extends Component {
  constructor() {
    super();
    this.handleListClick = this.handleListClick.bind(this);
    this.handleAddToCar = this.handleAddToCar.bind(this);

    this.state = {
      currentItem: null,
      car: [],
      totalNum: 0,
      total: 0
    };
  }

  handleListClick(item) {
    this.setState({
      currentItem: item
    });
  }

  handleAddToCar(currentItem) {
    let totalNum = this.state.totalNum;
    let car = this.state.car;
    let total = this.state.total;

    let exist = false;

    if (car.length) {
      car.forEach(item => {
        if (item.id === currentItem.id) {
          item.number += 1;
          totalNum += 1;
          exist = true;
          this.setState({
            totalNum
          });
        }
      });
    }

    if (!exist) {
      car = car.concat(Object.assign({}, currentItem, { number: 1 }));
      totalNum += 1;
      this.setState({
        car,
        totalNum
      });
    }

    total = car
      .map(item => item.price * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      total
    });
  }
  render() {
    return (
      <div className="row">
        <HardwareList
          items={this.props.items}
          listClick={this.handleListClick}
        />
        <HardwareDetail
          currentItem={this.state.currentItem}
          addToCar={this.handleAddToCar}
        />
        <Car {...this.state} />
      </div>
    );
  }
}

Builder.defaultProps = {
  items: [
    {
      id: 1,
      category: "CSS",
      title: "CPU",
      author: "MSI",
      price: 42
    },
    {
      id: 2,
      category: "JS",
      title: "RAM",
      author: "MSI",
      price: 69
    },
    {
      id: 3,
      category: "CSS",
      title: "Mainboard",
      author: "MSI",
      price: 25
    }
  ]
};

export default Builder;
