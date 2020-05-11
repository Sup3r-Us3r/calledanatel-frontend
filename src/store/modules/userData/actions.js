export function userDataSuccess(userInfo) {
  return {
    type: '@userData/USER_DATA_SUCCESS',
    payload: { userInfo },
  };
}
