import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div className="register">
            <div className="register-left">
                <div className="register-brand">Enchawet</div>
                <h2 className="register-heading">Start Interacting</h2>
                <div className="register-google">
                    <i className="fab fa-google-plus-g"></i>
                    <span>Sign In With Google</span>
                </div>
                <div className="register-left-separator">Or</div>
                <form className="register-form">
                    <input type="text" className="register-form-field" name="display" placeholder="Display Name"/>
                    <input type="email" className="register-form-field" name="Email" placeholder="Email"/>
                    <input type="password" className="register-form-field" name="password" placeholder="Password"/>
                    <button className="register-btn">Sign up</button>
                </form>
                <div className="register-already">
                    Have an account? <Link className="register-already-link">Log in <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="register-right">
                <div className="register-saying">
                    <h1 className="register-saying-heading">
                    distracted by the readable content of a page when looking at its layout.
                    </h1>
                    <p className="register-saying-author">
                        - Unknown
                    </p>
                </div>
                <div className="register-saying">
                    <h1 className="register-saying-heading">
                    distracted by the readable content of a page when looking at its layout.
                    </h1>
                    <p className="register-saying-author">
                        - Unknown
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register