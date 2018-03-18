import { combineReducers } from 'redux';
import appartmentReducer, {
  reducerName as appartmentsReducerName,
} from 'js/modules/Appartment/reducer';

const createRootReducer = () =>
  combineReducers({
    [appartmentsReducerName]: appartmentReducer,
  });

export default createRootReducer;
