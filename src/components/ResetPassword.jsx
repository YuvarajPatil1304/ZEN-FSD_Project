import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const {token} = useParams()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('https://zen-fsd-project-backend.onrender.com/auth/resetPassword/'+token, {
            password, 
        }).then(response => {
            if(response.data.status){
                navigate('/login')
            }
            console.log(response.data)
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <label htmlFor='password'>New Password:</label>
                <input type='password' autoComplete='off' placeholder='*****'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Reset</button>
            </form>
        </div>
    )
}

export default ResetPassword
