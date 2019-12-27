import React, {useReducer, useEffect} from 'react';

import * as types from '../types';
import {auth, createUserProfileDocument} from '../../firebase';
import UserContext from './userContext';
import UserReducer from './userReducer';

export const UserState = (props) => {
    const initialState = {
        user: {},
        loggedIn: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    //create new user

    //login user
    let unsubscribeFromAuth = null

    useEffect(  () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        const user = await createUserProfileDocument(userAuth, null)
        dispatch({
            type: types.LOGIN_USER,
            payload: user
        })
    })  
    }, [])

      useEffect( () => {
        return () =>  unsubscribeFromAuth();
      }, [])


    //logout user

    //edit user

    return (
        <UserContext.Provider value={
            {
                user: state.user
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;