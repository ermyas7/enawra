import React, {useState, useEffect, useContext} from 'react'

import Blogs from './Blogs'
import Register from '../../components/blogForm/Register'

import {firestore, auth, createUserProfileDocument} from '../../firebase'


import postsContext from '../../context/posts/postsContext';


 const Index = () => {
     const PostsContext = useContext(postsContext);
     const {posts, showForm, displayForm, addPost} = PostsContext;
    
    const [post, setPost] = useState({});
    const [user, setUser] = useState(null);

    const _changeHandler = (evt) => {
        const {name, value} = evt.target;
        post[name] = value;
        setPost(post);
    }

    const newPost = () => addPost(post, user)

    let unsubscribeFromAuth = null

    useEffect(  () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        const user = await createUserProfileDocument(userAuth, null)
        setUser(user)
    })  
    }, [])

      useEffect( () => {
        return () =>  unsubscribeFromAuth();
      }, [])

    return (
        <Blogs posts={posts} showForm={showForm} setAddPost={displayForm} _changeHandler={_changeHandler} addPost={newPost} post={post}/>

    )
}

export default Index