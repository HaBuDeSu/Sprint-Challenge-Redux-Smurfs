import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {setActiveSmurf, deleteSmurf} from '../actions';

const Smurf = (props) => {
  return (
    <div className="smurf">
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height}</p>
      <button onClick={() => props.setActiveSmurf(props.smurf)}>Update Smurf</button>
      <button onClick={() => props.deleteSmurf(props.smurf)}>Delete Smurf</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {setActiveSmurf, deleteSmurf})(Smurf);
