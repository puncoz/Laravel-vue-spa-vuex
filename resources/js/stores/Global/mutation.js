export default {
    setCurrentUser: (state, currentUser) => {
        state.currentUser = currentUser;
        state.isLoggedIn = true;
    }
};
