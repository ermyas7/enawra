import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss';
const index = () => {
    return (
        <header className="header">
            <div className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                    <i class="fas fa-bars"></i>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="/">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="#">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="#">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="#">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-link" to="#">Home</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default index
