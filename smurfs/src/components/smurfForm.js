import React from 'react';
import './App.css';

class SmurfForm extends React.Component {
  state: {
    activeSmurf: null
  }

  render() {
    return (
      <form>
        <input placeholder="Name" />
        <input placeholder="Age" />
        <input placeholder="Height" />
        <button>Add Smurf</button>
      </form>
    )
  }
}

export default SmurfForm;
