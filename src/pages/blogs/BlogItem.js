import React from 'react'

const BlogItem = ({post, removeHandler}) => {
    return (
        <div className="blog-card">
            <div className="blog-header">
            <p className="blog-date">{post.date}</p>
            <h1 className="blog-title">
                {post.title}
            </h1>
            </div>
            <div className="blog-img"  style={blogImg}></div>
            <div className="blog-body">
                <p className="blog-body-text">
                {post.body}
                </p>
            </div>
            <div className="blog-footer">
                <div className="blog-footer-top">
                <div className="blog-badge blog-badge-red">
                    <p>Read</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="blog-badge blog-badge-red">
                <i className="far fa-user"></i>
                    <p>{post.author}</p>
                </div>
                <div className="blog-badge blog-badge-red">
                    <p>Rate</p>
                    <i className="fas fa-star"></i>
                </div>
                <div className="blog-badge blog-badge-delete" onClick={() => removeHandler(post.id)}>
                <i className="fas fa-trash-alt danger"></i>
                </div>
                </div>

                <div className="blog-footer-bottom">
                {post.tags.map((tag, idx) => (
                    <div className="blog-badge  blog-badge-green" key={idx}>
                        <p>{tag}</p>
                        <i className="fas fa-tags"></i>
                    </div>
                ))}                
                </div>
            </div>       
        </div>
    )
}

const blogImg = {
    backgroundImage: 'url(https://source.unsplash.com/user/erondu/1600x900)'
}

export default BlogItem