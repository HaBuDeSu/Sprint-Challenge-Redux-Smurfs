import React from 'react';
import './App.css';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
  constructor() {
    super();

    this.state = {
      activeSmurf: null,
      formSmurf: {
        name: "",
        age: "",
        height: ""
      }
    }
  }

  changeHandler = e => {
    this.setState({
      formSmurf: {
        ...this.state.formSmurf,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <form onSubmit={() => this.props.addSmurf(this.state.formSmurf)}>
        <input
          placeholder="Name"
          name="name"
          value={this.state.formSmurf.name}
          onChange={this.changeHandler}
        />
        <input
          placeholder="Age"
          name="age"
          value={this.state.formSmurf.age}
          onChange={this.changeHandler}
        />
        <input
          placeholder="Height"
          name="height"
          value={this.state.formSmurf.height}
          onChange={this.changeHandler}
        />
        <button>{this.state.activeSmurf === null ? "Add Smurf" : "Update Smurf"}</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }

}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);
