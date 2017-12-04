import { login, logout } from './../../actions/auth';

test('should generate login action object', () => {

    const user = {
        uid: '123',
        displayName: 'nam nguyen',
        email: 'danhhoainam@gmail.com',
        emailVerified: true,
        phoneNumber: null,
        photoURL: 'http://image',
        refreshToken: '123333'
    };
    const action = login(user);
    expect(action).toEqual({
        type: 'LOGIN',
        user
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});