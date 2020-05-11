export function sendEditDataRequest(dataForEdit) {
  return {
    type: '@updateFormData/SEND_EDIT_DATA_REQUEST',
    payload: { dataForEdit },
  };
}

export function setToggleEditRequest(trueOfFalse) {
  return {
    type: '@updateFormData/SET_TOGGLE_EDIT_REQUEST',
    payload: { trueOfFalse },
  };
}
