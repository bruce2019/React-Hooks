import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() { document.title = `You clicked ${this.state.count} times`; }
  componentDidUpdate() { document.title = `You clicked ${this.state.count} times`; }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>Click Me</button>
      </div>
    );
  }
}

export default Counter;
