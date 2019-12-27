import React from 'react'
import {firestore} from '../../firebase'

const BlogItem = ({post}) => {
    const docRef = firestore.doc(`posts/${post.id}`)
    const deleteHandler = () => docRef.delete()
    const rate = () => docRef.update({star: ++post.star})
    
    return (
        <div className="blog-card">
            <div className="blog-header">
            <p className="blog-date">12-may-2019 </p>
            <h1 className="blog-title">
                {post.title}
            </h1>
            </div>
            <div className="blog-img"  style={{backgroundImage: `url(${post.image})`}}></div>
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
                    <p>{post.author.displayName}</p>
                </div>
                <div className="blog-badge blog-badge-red">
                    <p>{post.star}</p>
                    <i className="fas fa-star" onClick={rate}></i>
                </div>
                <div className="blog-badge blog-badge-delete" onClick={deleteHandler}>
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



export default BlogItem