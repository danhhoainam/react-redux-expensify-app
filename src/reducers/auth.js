export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.user.uid,
                displayName: action.user.displayName,
                email: action.user.email,
                emailVerified: action.user.emailVerified,
                phoneNumber: action.user.phoneNumber,
                photoURL: action.user.photoURL,
                refreshToken: action.user.refreshToken
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}