import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.cars) {
      this.props.fetchCar(this.props.match.params.id)
    }
  }
  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <p>test</p>
        <div className="car-item">
          <h3>{this.props.car.brand}</h3>
          <p>{this.props.car.model}</p>
          <p>{this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const id = parseInt(props.match.params.id, 10);
  const car = state.cars.find((car) => car.id === id);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
