import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {updateSmurf, deleteSmurf} from '../actions';

const Smurf = (props) => {
  return (
    <div className="smurf">
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height}</p>
      <button>Update Smurf</button>
      <button onClick={() => props.deleteSmurf(props.smurf)}>Delete Smurf</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {updateSmurf, deleteSmurf})(Smurf);
