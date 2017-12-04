import authReducer from './../../reducers/auth';

test('should set user for login', () => {
    const action = {
        type: 'LOGIN',
        user: {
            uid: '123',
            displayName: 'nam nguyen',
            email: 'danhhoainam@gmail.com',
            emailVerified: true,
            phoneNumber: null,
            photoURL: 'http://image',
            refreshToken: '123333'
        }
    }

    const state = authReducer({}, action);
    expect(state).toEqual(action.user);
});

test('should clear user for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
});