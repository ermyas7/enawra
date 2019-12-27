import React, {useState, useContext} from 'react'
import Blogs from './Blogs'


import postsContext from '../../context/posts/postsContext';
import userContext from '../../context/user/userContext';

 const Index = () => {
     const PostsContext = useContext(postsContext);
     const UserContext = useContext(userContext);
     const {posts, showForm, displayForm, addPost} = PostsContext;
    const [post, setPost] = useState({});


    const _changeHandler = (evt) => {
        const {name, value} = evt.target;
        post[name] = value;
        setPost(post);
    }

    const newPost = () => addPost(post, UserContext.user)

    
    return (
        <Blogs posts={posts} showForm={showForm} setAddPost={displayForm} _changeHandler={_changeHandler} addPost={newPost} post={post}/>

    )
}

export default Index