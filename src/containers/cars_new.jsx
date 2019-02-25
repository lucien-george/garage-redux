import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/'); // Navigate after submit (redirection)
        return car;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label>Brand</label>
            <Field name="brand" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label>Model</label>
            <Field name="model" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label>Owner</label>
            <Field name="owner" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label>Plate</label>
            <Field name="plate" type="text" component="input" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default reduxForm({form: 'newCarForm'})(connect(mapStateToProps, {createCar})(CarsNew));
