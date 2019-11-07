import React, {useState} from 'react'
import uuidv1 from 'uuid/v1';
import './blogs.scss'
import BlogItem from './BlogItem'
import AddBlog from '../../components/blogForm/AddBlog';

const mockPosts = [
    {
        id: '1',
        title: 'Introduction',
        body: 't. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        author: 'Ermyas',
        tags: ['sport', 'life style', 'fun'],
        image: 'https://source.unsplash.com/user/erondu/1600x900',
        date: 'oct 22, 2019'
    },
    {
        id: '2',
        title: 'Greetings',
        body: ' The point of using Lorem Ipsum is that it has a more-or-less normal',
        author: 'Ermyas',
        tags: ['sport', 'life style', 'fun'],
        image: 'https://source.unsplash.com/user/eron/1600x900',
        date: 'oct 15, 2019'
    },
    {
        id: '3',
        title: 'Action',
        body: ' The point of using Lorem Ipsum is that it has a more-or-less normal',
        author: 'Bereket',
        tags: ['sport', 'coffee', 'faffy'],
        image: 'https://source.unsplash.com/user/ero/1600x900',
        date: 'oct 15, 2019'
    },

]

 const Index = () => {
     const [posts, setPosts] = useState(mockPosts);
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
            post.id = uuidv1();
            post.author = 'Muna';
            post.date = 'oct 15, 2019';
            post.tags = [...post.tags.split(" ")];
            const newPosts = [...posts,post];
            console.log(newPosts);
            setPosts(newPosts);
            setPost({});
            setAddPost(false);
        }
    }
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