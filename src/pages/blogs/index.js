import React, {useState, useEffect} from 'react'

import Blogs from './Blogs'

import {firestore} from '../../firebase'
import {collectIdsAndDocs} from '../../utilis'


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
            post.star = 0;
            post.tags = [...post.tags.split(",")];
            const docRef = await firestore.collection('posts').add(post);
            setPost({});
            setAddPost(false);
        }
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
        <Blogs posts={posts} _addPost={_addPost} setAddPost={setAddPost} _changeHandler={_changeHandler} addPost={addPost} post={post}/>        
    )
}

export default Index