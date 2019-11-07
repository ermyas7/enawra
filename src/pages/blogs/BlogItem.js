import React from 'react'

const BlogItem = () => {
    return (
        <div className="blog-card">
            <div className="blog-header">
            <p className="blog-date">oct 22, 2019</p>
            <h1 className="blog-title">
                this is awesome title
            </h1>
            </div>
            <div className="blog-img"  style={blogImg}></div>
            <div className="blog-body">
                <p className="blog-body-text">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                    <p>Ermyas</p>
                </div>
                <div className="blog-badge blog-badge-red">
                    <p>Rate</p>
                    <i className="fas fa-star"></i>
                </div>
                </div>

                <div className="blog-footer-bottom">
                <div className="blog-badge blog-badge-green">
                    <p>Read</p>
                    <i className="fas fa-tags"></i>
                </div>
                <div className="blog-badge blog-badge-green">
                    <p>Ermyas</p>
                    <i className="fas fa-tags"></i>
                </div>
                <div className="blog-badge blog-badge-green">
                    <p>Rate</p>
                    <i class="fas fa-tags"></i>
                </div>
                </div>
                
            </div>       
        </div>
    )
}

const blogImg = {
    backgroundImage: 'url(https://source.unsplash.com/user/erondu/1600x900)'
}

export default BlogItem