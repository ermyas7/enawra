import React from 'react'
import './blogForm.scss'
const AddBlog = ({post, changeHandler, addPost}) => {
    return (
        <div className="add-blog">
            <input type="text" className="add-blog-title"
            name="title"
            placeholder="title"
            value={post.title}
            onChange={(evt) => changeHandler(evt)}/>
            <textarea name="body" id="body" cols="10" rows="4" className="add-blog-body"
            onChange={(evt) => changeHandler(evt)}>{post.title}</textarea>
            <input type="text" className="add-blog-img"
            name="image"
            placeholder="image" value={post.image}
            onChange={(evt) => changeHandler(evt)}/>
            <input type="text" className="add-blog-tages"
            name="tags"
            placeholder="tags" value={post.tags}
            onChange={(evt) => changeHandler(evt)}/>
            <button className="add-blog-submit"
            onClick={addPost}>
                Submit
            </button>
        </div>
    )
}

export default AddBlog