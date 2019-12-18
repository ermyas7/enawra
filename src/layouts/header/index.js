import React from 'react'
import {Link} from 'react-router-dom'
import {signOut} from '../../firebase'
import './header.scss';
const index = () => {
    return (
        <header className="header">
            <div className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                    <i className="fas fa-bars"></i>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="/">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="#">Community</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="/about">About</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="#">Contact Us</Link>
                    </li>
                    <li className="navigation-item">
                        <span className="navigation-link" onClick={signOut}>
                            Sign out <i className="fas fa-sign-out-alt"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default index
