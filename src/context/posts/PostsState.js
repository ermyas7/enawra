import React, {useReducer, useEffect} from 'react';
import {firestore} from '../../firebase';
import * as types from '../types';
import PostsContext from './postsContext';
import PostsReducer from './postsReducer';

import {collectIdsAndDocs} from '../../utilis';

const PostsState = (props) => {
    const initialState = {
        posts: [],
        showForm: false
    }
    const [state, dispatch] = useReducer(PostsReducer, initialState);
    

    //store a function to clean up after the component unmount
    let unsubscribeFromFirestore = null
    //Get Posts
    useEffect(  () => {
        unsubscribeFromFirestore = firestore.collection('posts')
        .onSnapshot(snapshot => {
            const posts = snapshot.docs.map(collectIdsAndDocs)
            dispatch({
                type: types.GET_POSTS,
                payload: posts
            })
        })
        }
    , [])

    //cleanup data after the app is unmounted
    useEffect( () => {
        return () =>  unsubscribeFromFirestore();
      }, [])
    
      //Add new post
      const addPost = async (post, user) => {

        if( post.body&&post.image && post.tags){
            post.author = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid}
            post.date = new Date();
            post.star = 0;
            post.tags = [...post.tags.split(",")];
            const docRef = await firestore.collection('posts').add(post);
            dispatch({
                type: types.ADD_POST
            })
        }
    }

    //display post form
    const displayForm = () => dispatch({type:types.SHOW_FORM})

    //Delete a post

    //Upvote a post

    //comment on a post


    return (
    <PostsContext.Provider value={{
        posts: state.posts,
        showForm: state.showForm,
        displayForm: displayForm,
        addPost: addPost
    }}>
        {props.children}
    </PostsContext.Provider>
    )
}


export default PostsState;