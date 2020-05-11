import { produce } from 'immer';

const INITIAL_STATE = {
  sign: false,
};

export default function userData(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@userData/USER_DATA_SUCCESS': {
        const { userInfo } = action.payload;

        draft.sign = true;
        draft.data = userInfo;
        break;
      }
      default:
    }
  });
}
