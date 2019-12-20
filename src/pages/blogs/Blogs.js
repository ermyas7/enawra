import React from 'react'
import './blogs.scss'
import BlogItem from './BlogItem'
import AddBlog from '../../components/blogForm/AddBlog'

const Blogs = (props) => {
    const {posts, setAddPost, _addPost, _changeHandler, addPost, post} = props
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

export default Blogs