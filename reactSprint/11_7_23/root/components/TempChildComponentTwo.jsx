// TEMPORARY CHILD COMPONENT FOR 11/7/23 ASSIGNMENT

import { Component } from 'react';

class TempChildComponentTwo extends Component {
  render() {
    return (
      <div>
        <h4>Greetings from Temp Child Component Number Two!</h4>
        <p>
          I've received this prop: <code>{this.props.food}</code>
        </p>
      </div>
    );
  }
}

export default TempChildComponentTwo;
