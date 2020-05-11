import { all } from 'redux-saga/effects';

import userData from './userData/sagas';
import updateFormData from './updateFormData/sagas';

export default function* rootSaga() {
  return yield all([userData, updateFormData]);
}
