// TEMPORARY PARENT COMPONENT FOR 11/7/23 ASSIGNMENT

import { Component } from 'react';
import './index.css';
import './styles/App.css';
import TempChildComponentOne from './components/TempChildComponentOne';
import TempChildComponentTwo from './components/TempChildComponentTwo';

const initialState = {
  person: {
    id: 1,
    name: 'Genghis Khan',
    job: 'Conquering',
    hobby: 'Pillaging',
  },
  inputs: {
    word: null,
    food: null,
  },
  showChildren: {
    word: false,
    food: false,
  },
};

class TempMainComponent extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleFoodChange = this.handleFoodChange.bind(this);
    this.handleWordSubmit = this.handleWordSubmit.bind(this);
    this.handleFoodSubmit = this.handleFoodSubmit.bind(this);
  }

  handleNameChange(e) {
    e.preventDefault();
    const names = [
      'Alexander the Great',
      'Genghis Khan',
      'Napoleon Bonaparte',
      'Julius Caesar',
      'Hernán Cortés',
      'Attila the Hun',
      'William the Conqueror',
      'Pirate Blackbeard',
      'Pirate Bartholomew Roberts',
      'Pirate Anne Bonny',
      'Pirate Calico Jack',
      'Pirate Captain Kidd',
      "Pirate Grace O'Malley",
      'Pirate Henry Morgan',
      'Pirate Jean Lafitte',
    ];
    const idx = Math.floor(Math.random() * (15 - 1) + 1);
    const newState = { ...this.state };
    newState.person.name = names[idx];
    this.setState(newState);
  }

  handleWordChange(e) {
    e.preventDefault();
    const newState = { ...this.state };
    newState.inputs.word = e.target.value;
  }

  handleFoodChange(e) {
    e.preventDefault();
    const newState = { ...this.state };
    newState.inputs.food = e.target.value;
  }

  handleWordSubmit(e) {
    e.preventDefault();
    const newState = { ...this.state };
    newState.showChildren.word = !this.state.showChildren.word;
    this.setState(newState);
  }

  handleFoodSubmit(e) {
    e.preventDefault();
    const newState = { ...this.state };
    newState.showChildren.food = !this.state.showChildren.food;
    this.setState(newState);
  }

  render() {
    return (
      <div className="app">
        <main className="app-container">
          <div className="content">
            <h3>
              Holy Component, Batman, this has been rendered via the
              class-component paradigm!
            </h3>
            <p>My id is: {this.state.person.id}</p>
            <p>My name is: {this.state.person.name}</p>
            <p>My job is: {this.state.person.job}</p>
            <p>In my free time, I enjoy some {this.state.hobby}</p>
            <button
              className="btn"
              onClick={this.handleNameChange}
            >
              Change my name to some other random person!
            </button>
          </div>
          <div className="content inputs">
            <div className="input-container">
              <label>
                What is your favorite word?
                <input
                  type="text"
                  placeholder="enter word..."
                  onChange={this.handleWordChange}
                />
              </label>
              <button
                className="btn"
                onClick={this.handleWordSubmit}
              >
                See my word in a child component!
              </button>
            </div>
            <div className="input-container">
              <label>
                What is your favorite food?
                <input
                  type="text"
                  placeholder="enter food..."
                  onChange={this.handleFoodChange}
                />
              </label>
              <button
                className="btn"
                onClick={this.handleFoodSubmit}
              >
                See my word in a child component!
              </button>
            </div>
            {this.state.showChildren.word && (
              <TempChildComponentOne word={this.state.inputs.word} />
            )}
            {this.state.showChildren.food && (
              <TempChildComponentTwo food={this.state.inputs.food} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default TempMainComponent;
