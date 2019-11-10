import React, {useState, useEffect} from 'react'

import {firestore} from '../../firebase'
import {collectIdsAndDocs} from '../../utilis'

import './blogs.scss'
import BlogItem from './BlogItem'
import AddBlog from '../../components/blogForm/AddBlog'

 const Index = () => {
     const [posts, setPosts] = useState([]);
     const [addPost, setAddPost] = useState(false);
    const [post, setPost] = useState({});

    const _changeHandler = (evt) => {
        const {name, value} = evt.target;
        post[name] = value;
        setPost(post);
    }

    const _addPost = () => {
        console.log(post);
        if(post.title && post.body&&post.image && post.tags){
            post.author = 'Muna';
            post.date = 'oct 15, 2019';
            post.tags = [...post.tags.split(",")];
            const newPosts = [...posts,post];
            console.log(newPosts);
            setPosts(newPosts);
            setPost({});
            setAddPost(false);
        }
    }

    const getPosts = async () => {
        const snapshot = await firestore.collection('posts')
        .get()
        const posts = snapshot.docs.map(collectIdsAndDocs)
        console.log(posts)
        setPosts(posts)
    }
    useEffect( () => {
      getPosts()  
    }, [])
    return (
        <div className="blog">
            {  
                !addPost?
                <button className="blog-add"
                onClick={() => setAddPost(true)}>Add Blog</button> :
                <AddBlog changeHandler = {_changeHandler} post={post}
                addPost={_addPost}/>
                }

            <div className="blog-lists">
                {
                    posts.map(post => (
                        <BlogItem key={post.id} post={post}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Index