import * as types from '../types';

export default (state, action) => {
    switch(action.type){
        case types.GET_POSTS:
            return {...state, posts: action.payload};
        case types.ADD_POST:
            return {...state, showForm: false};
        case types.SHOW_FORM:
            return {...state, showForm: true};        
        default: 
            return state;
    }
}