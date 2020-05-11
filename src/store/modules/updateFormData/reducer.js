import { produce } from 'immer';

const INITIAL_STATE = {
  edit: false,
};

export default function updateFormData(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@updateFormData/SEND_EDIT_DATA_REQUEST': {
        const { dataForEdit } = action.payload;
        draft.data = dataForEdit;
        break;
      }
      case '@updateFormData/SET_TOGGLE_EDIT_REQUEST': {
        const { trueOfFalse } = action.payload;
        draft.edit = trueOfFalse;
        break;
      }
      default:
    }
  });
}
