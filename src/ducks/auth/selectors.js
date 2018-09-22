const selectUser = (state) => state.auth.user;

const selectIsAuth = (state) => state.auth.user !== null;

const selectLoginStatus = (state) => state.auth.status.login;

const selectRegisterStatus = (state) => state.auth.status.register;

export {
    selectUser,
    selectIsAuth,
    selectLoginStatus,
    selectRegisterStatus
};
