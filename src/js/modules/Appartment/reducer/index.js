import {
  FETCH_APPARTMENTS_START,
  FETCH_APPARTMENTS_SUCCESS,
  FETCH_APPARTMENTS_FAIL,
} from '../actions';

export const initialState = {
  appartments: [],
  isLoading: false,
  error: null,
};

export const reducerName = 'appartments';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPARTMENTS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_APPARTMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        appartments: action.payload,
        error: null,
      };

    case FETCH_APPARTMENTS_FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
