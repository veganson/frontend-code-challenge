import React from 'react';
import R from 'ramda';
import PropTypes from 'prop-types';
import Appartment from './Appartment';

const getApId = R.pathOr('', ['_id', '$id']);

const AppartmentList = ({ appartments, isLoading, error }) => {
  const errorSection = error ? (
    <div className="appartment-list__error">{error}</div>
  ) : null;

  const loader = isLoading ? 'loading...' : null;

  const renderedAppartments = R.map(
    appartment => (
      <Appartment key={getApId(appartment)} appartment={appartment} />
    ),
    appartments,
  );

  return (
    <div className="appartment-list">
      {errorSection}
      {loader}
      {renderedAppartments}
    </div>
  );
};

AppartmentList.propTypes = {
  appartments: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default AppartmentList;
