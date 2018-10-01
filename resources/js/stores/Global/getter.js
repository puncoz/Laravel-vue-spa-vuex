export default {
    isLoggedIn(state) {
        if (state.currentUser === null) {
            return false;
        } else {
            return state.currentUser.token !== "";
        }
    }
};
