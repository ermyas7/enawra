import React from 'react'
import './blogForm.scss'
const AddBlog = (props) => {
    return (
        <div className="add-blog">
            <input type="text" className="add-blog-title"
            name="title"
            placeholder="title"
            value={props.title}/>
            <textarea name="body" id="body" cols="10" rows="4" className="add-blog-body">{props.title}</textarea>
            <input type="text" className="add-blog-img"
            name="image"
            placeholder="image" value={props.image}/>
            <input type="text" className="add-blog-tages"
            name="tages"
            placeholder="tages" value={props.tags}/>
            <button className="add-blog-submit">
                Submit
            </button>
        </div>
    )
}

export default AddBlog