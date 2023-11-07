import { Component } from 'react';
import '../index.css';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { id: 1, name: 'Cerulean Steve' };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(e) {
    e.preventDefault();
    this.setState({ id: this.state.id + 1 });
  }

  render() {
    return (
      <div className="content">
        <h3>
          Holy Component, Batman, this has been rendered via the class-component
          paradigm!
        </h3>
        <p>My id is: {this.state.id}</p>
        <p>My name is: {this.state.name}</p>
        <p>My location is: {this.props.dummyProp}</p>
        <button
          className="btn"
          onClick={this.handleIncrement}
        >
          Increment my id!
        </button>
      </div>
    );
  }
}

export default ClassComponent;
