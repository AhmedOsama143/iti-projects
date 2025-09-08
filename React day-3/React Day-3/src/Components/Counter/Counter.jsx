import styles from "./Counter.module.css";
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className={styles.counter}>
        <h1 className={styles.title}>Counter: {this.state.count}</h1>
        <button className={styles.button} onClick={this.increment}>
          increment +
        </button>
        <button className={styles.button} onClick={this.decrement}>
          decrement -
        </button>
        <button className={styles.button} onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
