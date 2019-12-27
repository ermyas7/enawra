import React from 'react'
import './blogs.scss'
import BlogItem from './BlogItem'
import AddBlog from '../../components/blogForm/AddBlog'


const Blogs = (props) => {
    const {posts, setAddPost, addPost, _changeHandler, showForm, post} = props
    return (
        <div className="blog">
            {  
                !showForm?
                <button className="blog-add"
                onClick={() => setAddPost()}>Add Blog</button> :
                <AddBlog changeHandler = {_changeHandler} post={post}
                addPost={addPost}/>
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