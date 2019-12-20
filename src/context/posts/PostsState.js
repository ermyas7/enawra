import React, {useReducer} from 'react';
import * as types from '../types';
import PostsContext from './postsContext';
import PostsReducer from './postsReducer';

const PostsState = (props) => {
    const initialState = [];
    const [state, dispatch] = useReducer(PostsReducer, initialState);
    //Get Posts

    //Add new post

    //Delete a post

    //Upvote a post

    //comment on a post


    return (
    <PostsContext.Provider value={{
        posts: state,
    }}>
        {props.children}
    </PostsContext.Provider>
    )
}


export default PostsState;