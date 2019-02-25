import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions';
import { deleteCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id)
    }
  }

  handleSubmit = () => {
    this.props.deleteCar(this.props.car.id, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <button onClick={this.handleSubmit}>Delete this car</button>
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
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
