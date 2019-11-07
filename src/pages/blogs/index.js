import React from 'react'
import './blogs.scss'
import BlogItem from './BlogItem'

 const index = () => {
    return (
        <div className="blog">
            <div className="blog-lists">
                <BlogItem/>
                <BlogItem/>
            </div>
        </div>
    )
}

export default index