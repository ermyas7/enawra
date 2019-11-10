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

    const _addPost = async () => {

        if(post.title && post.body&&post.image && post.tags){
            post.author = 'Muna';
            post.date = 'oct 15, 2019';
            post.tags = [...post.tags.split(",")];
            const docRef = await firestore.collection('posts').add(post);
            setPost({});
            setAddPost(false);
        }
    }

    const removePost = async id => {
        await firestore.doc(`posts/${id}`).delete()
    }

    //store a function to clean up after the component unmount
    let unsubscribe = null

    useEffect( () => {
      unsubscribe = firestore.collection('posts')
      .onSnapshot(snapshot => {
          const posts = snapshot.docs.map(collectIdsAndDocs)
          setPosts(posts)
      })  
    }, [])

    useEffect( () => {
        return () =>  unsubscribe();
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
                        <BlogItem key={post.id} post={post} removeHandler={removePost}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Index