import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAppartments } from '../actions';
import { getAppartments, getIsLoading, getError } from '../selectors';
import AppartmentListComponent from '../components/AppartmentList';

class AppartmentList extends Component {
  componentWillMount() {
    this.props.fetchAppartments();
  }

  render() {
    const { appartments, error, isLoading } = this.props;

    return (
      <AppartmentListComponent
        appartments={appartments}
        error={error}
        isLoading={isLoading}
      />
    );
  }
}

AppartmentList.propTypes = {
  fetchAppartments: PropTypes.func.isRequired,
  appartments: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

AppartmentList.defaultProps = {
  error: '',
};

export default connect(
  state => ({
    error: getError(state),
    isLoading: getIsLoading(state),
    appartments: getAppartments(state),
  }),
  {
    fetchAppartments,
  },
)(AppartmentList);
