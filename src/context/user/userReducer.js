import * as types from '../types';

export default (state, action) => {

    switch(action.type){
        case types.LOGIN_USER:
            return {...state, loggedIn: true, user: action.payload}
        default:
            return state;
    }
}