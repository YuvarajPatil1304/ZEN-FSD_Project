import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('https://zen-fsd-project-backend.onrender.com/auth/forgotPassword', {
            email, 
        }).then(response => {
            if(response.data.status){
                alert("check your email for reset password link")
                navigate('/login')
            }
            console.log(response.data)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                
                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ForgotPassword
