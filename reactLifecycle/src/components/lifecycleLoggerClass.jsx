import { Component } from 'react';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component Mounted...');
  }
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count) {
      console.log('Component Updated..', this.state.count);
    }
  }
  componentWillUnmount() {
    console.log('Component unmounted...');
  }
  render() {
    return (
      <div className='logger-container'>
        <h2>LifeCycleLogger</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount} className='secondary-btn'>
          Update
        </button>
      </div>
    );
  }
}

export default LifecycleLogger;
