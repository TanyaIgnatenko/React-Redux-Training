const selectUser = (state) => state.auth.user;

const selectIsAuth = (state) => state.user !== null;


export {
    selectUser,
    selectIsAuth
};
