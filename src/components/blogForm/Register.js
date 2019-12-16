import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {signInWithGoogle} from '../../firebase'
import { auth } from 'firebase'

const Register = () => {
    const [newUser, setUser] = useState({
        displayName: '',
        email: '',
        password: ''
    })

    const setInput = (evt) => {
        const modifiedUser = {...newUser, [evt.target.name]: evt.target.value}
        setUser(modifiedUser)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        //validate user input
        if(!(newUser.email && newUser.password && newUser.displayName)){
            console.log('input field can not be empty!')
        }else if(newUser.password.length <= 6){
            console.log('password must be more than 6 characters')
        }else{
            console.log(newUser)

            //create user using email
            try{
                const { user } = await auth().createUserWithEmailAndPassword(
                    newUser.email,
                    newUser.password,
                  );
              await user.updateProfile({displayName: newUser.displayName})
              setUser({
                displayName: '',
                email: '',
                password: ''
            })     

            }catch(err){
                console.log(err);
            }

        }        
    }
    return (
        <div className="register">
            <div className="register-left">
                <div className="register-brand">Enchawet</div>
                <h2 className="register-heading">Start Interacting</h2>
                <div className="register-google" onClick={signInWithGoogle}>
                    <i className="fab fa-google-plus-g"></i>
                    <span>Sign In With Google</span>
                </div>
                <div className="register-left-separator">Or</div>
                <form className="register-form">
                    <input type="text" className="register-form-field" name="displayName" placeholder="Display Name" value={newUser.displayName} onChange={setInput}/>
                    <input type="email" className="register-form-field" name="email" placeholder="Email" value={newUser.email} onChange={setInput}/>
                    <input type="password" className="register-form-field" name="password" placeholder="Password" value={newUser.password} onChange={setInput}/>
                    <button className="register-btn" onClick={handleSubmit}>Sign up</button>
                </form>
                <div className="register-already">
                    Have an account? <Link className="register-already-link" to="/blogs">Log in <i className="fas fa-arrow-right"></i></Link>
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