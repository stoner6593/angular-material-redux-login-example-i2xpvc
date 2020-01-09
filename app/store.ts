import { LOGIN, LOGOUT } from './actions';

export interface IAppState {
  authentication: Authentication;
  isLoogedIn: boolean;
}
const data = localStorage.getItem('currentUser');
console.log(data)
console.log(data);
export const INITIAL_STATE: IAppState = {
  authentication: {
    username: '',
    token: '', 
    password: ''
  },
  isLoogedIn: false
}
export interface Authentication {
  username: string;
  token: string;
  password: string;
}
export function rootReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      let userData = {
        username: action.data.email,
        token: 'TOKEN',
        password: action.data.password
      };
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return Object.assign({}, state, {
        authentication: userData,
        isLoogedIn: true
      })
    case LOGOUT:
      localStorage.setItem('currentUser', "");
      return Object.assign({}, state, {
        authentication: {
          username: '',
          token: '',
          password: ''
        },
        isLoogedIn: false
      })
  }
  return state;
}