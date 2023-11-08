// TEMPORARY CHILD COMPONENT FOR 11/7/23 ASSIGNMENT

import { Component } from 'react';

class TempChildComponentOne extends Component {
  render() {
    return (
      <div>
        <h4>Greetings from Temp Child Component Number One!</h4>
        <p>
          I've received this prop: <code>{this.props.word}</code>
        </p>
      </div>
    );
  }
}

export default TempChildComponentOne;
