export const FETCH_APPARTMENTS_START = 'APPARTMENT/FETCH_APPARTMENTS_START';
export const FETCH_APPARTMENTS_SUCCESS = 'APPARTMENT/FETCH_APPARTMENTS_SUCCESS';
export const FETCH_APPARTMENTS_FAIL = 'APPARTMENT/FETCH_APPARTMENTS_FAIL';

export const fetchAppartments = () => ({
  type: FETCH_APPARTMENTS_START,
});

export const fetchAppartmentsFail = error => ({
  type: FETCH_APPARTMENTS_FAIL,
  error,
});

export const fetchAppartmentsSuccess = res => ({
  type: FETCH_APPARTMENTS_SUCCESS,
  payload: res,
});
