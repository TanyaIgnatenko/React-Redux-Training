export const isAdmin = state => {
    if (state.user) {
        return state.user.role === 'admin';
    }
    return false;
};

export const isLoggedIn = state => state.user !== null;
