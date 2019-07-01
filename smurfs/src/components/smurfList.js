import React from 'react';
import Smurf from './smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import PropTypes from 'prop-types';

class SmurfList extends React.Component {
  state: {

  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return(
      this.props.smurfs.map(smurf =>
        <Smurf smurf={smurf} key={smurf.id}/>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);

SmurfList.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.object)
};
