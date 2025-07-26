import { Component } from 'react';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('componet mounted.');
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className='logger-container'>
        <h2>Lifecycle Logger(class component)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount} className='secondary-btn'>
          Update
        </button>
      </div>
    );
  }
}

export default LifecycleLogger;
