import React from 'react';
import R from 'ramda';
import Appartment from './Appartment';

const AppartmentList = () => (
  <div className="appartment-list">{R.times(Appartment, 10)}</div>
);

export default AppartmentList;
