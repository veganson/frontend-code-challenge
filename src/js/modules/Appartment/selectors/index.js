import R from 'ramda';
import { reducerName } from '../reducer';

const getAppartmentState = R.propOr({}, reducerName);

export const getAppartments = R.pipe(
  getAppartmentState,
  R.propOr([], 'appartments'),
);

export const getIsLoading = R.pipe(getAppartmentState, R.prop('isLoading'));

export const getError = R.pipe(getAppartmentState, R.prop('error'));
