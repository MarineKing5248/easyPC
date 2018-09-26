import React, { Component } from "react";

import HardwareList from "./hardwareList";
import HardwareDetail from "./hardwareDetail";
import Car from "./Car";
import { Button } from "reactstrap";

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
        <div>
          <Button color="danger">danger</Button>
        </div>
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
      title: "CSS权威指南",
      author: "Eric A. Meyer",
      price: 42
    },
    {
      id: 2,
      category: "JS",
      title: "JavaScript高级程序设计",
      author: "Nicholas C.Zakas",
      price: 69
    },
    {
      id: 3,
      category: "CSS",
      title: "精通CSS:高级Web标准解决方案",
      author: "巴德,科利森,莫尔",
      price: 25
    }
  ]
};

export default Builder;
