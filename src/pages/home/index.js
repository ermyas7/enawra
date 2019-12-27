import React from 'react'
import {Link} from 'react-router-dom'
import Auth from '../auth';
import './home.scss'


const index = () => {
    return (
        <div className="home">
            {/* <div className="home-content">
                <h1 className="heading-primary home-heading"> 
                    <span className="heading-primary-main">meet new people</span>
                    <span className="heading-primary-sub">
                        There is always something you can share
                    </span>
                </h1>
                <div className="home-btn">
                <Link to="/blogs" className="btn btn-blue">Get Started</Link> 
                </div>
                
            </div> */}
            <Auth></Auth>
        </div>
    )
}

export default index
