import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchCars } from '../actions';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return(
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car">
            <h3>{car.brand} {car.model}</h3>
            <p>owner: {car.owner}</p>
            <p>plate: {car.plate}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return(
      <div className="container">
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch); // bind the action to props
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
