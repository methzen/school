import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
    ],
  };

  handleIncrement = (id) => {
    const counters = this.state.counters.map((counter) => {
      counter.id === id ? counter.value++ : null;
      return counter});
      
    this.setState({ counters });
  };

  handleDecrement= (id) => {
    const counters = this.state.counters.map((counter) => {
      counter.id === id && counter.value!==0 ? counter.value-- : null;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Reset");
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <span className="badge m-2 bg-secondary"> 
        {this.state.counters.filter(counter => counter.value >0).length}
        </span> 
        <div>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              counter={counter}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
