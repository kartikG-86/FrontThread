import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)
    const userLogin = (e) => {
        e.preventDefault()
        if (!isDisabled) {
            console.log('Email:', email);
            console.log('Password:', password);
            localStorage.setItem('token', JSON.stringify(true))
            navigate('/threads')
            setEmail('')
            setPassword('')
        }
    }

    useEffect(() => {
        if (email != '' && password != '') {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    }, [email, password])
    return <>
        <div className="login">
            <img src="https://static.cdninstagram.com/rsrc.php/yH/r/JesX5Buw5jT.webp" type="image/webp" />
        </div>
        <div className="d-flex flex-row justify-content-center">
            <div className="login-form">
                <h6 className="text-center">Log in to your thread account</h6>

                <form className="mt-4" onSubmit={userLogin}>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="username" id="exampleFormControlInput1" placeholder="Username, phone or email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name="password" id="exampleFormControlInput1" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-1">
                        <button type="submit " className={`btn login-btn text-center ${isDisabled ? 'disabled-btn' : ''}`}>Log in</button>
                    </div>
                </form>
                <div className="mb-3">
                    <a href="/forgot-password" className="btn text-center">Forgot password?</a>
                </div>

                <div className="d-flex flex-row">
                    <div className="line"></div>
                    <div className="other-login-option">or</div>
                    <div className="line"></div>
                </div>

                <div className="other-options my-4 d-flex flex-row justify-content-between">
                    <img src="./google-logo.webp" />
                    <h6 className="m-3">Continue with Google</h6>
                    <i className="bi bi-chevron-right m-3"></i>
                </div>
            </div>
        </div>
    </>
}

export default Login