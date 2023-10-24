export const selectIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};
export const selectIsRefresh = (state) => {
  return state.auth.isRefresh;
};
export const selectUser = (state) => {
  return state.auth.user;
};
