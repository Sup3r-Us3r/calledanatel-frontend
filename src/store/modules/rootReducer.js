import { combineReducers } from 'redux';

import userData from './userData/reducer';
import updateFormData from './updateFormData/reducer';

export default combineReducers({
  userData,
  updateFormData,
});
