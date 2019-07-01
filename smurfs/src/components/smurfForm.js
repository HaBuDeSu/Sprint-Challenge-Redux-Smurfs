import React from 'react';
import './App.css';
import { addSmurf, updateSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
  constructor() {
    super();

    this.state = {
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
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.activeSmurf === null ? this.props.addSmurf(this.state.formSmurf) : this.props.updateSmurf({...this.state.formSmurf, id: this.props.activeSmurf.id});
        this.setState({
          formSmurf: {
            name: "",
            age: "",
            height: ""
          }
        })
      }}>
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
        <button>{this.props.activeSmurf === null ? "Add Smurf" : "Update Smurf"}</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    activeSmurf: state.activeSmurf
  }

}

export default connect(mapStateToProps, {updateSmurf, addSmurf})(SmurfForm);
