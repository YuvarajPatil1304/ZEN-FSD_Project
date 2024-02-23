import React from 'react'
import axios from 'axios'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../../server/models/User'

function Home() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleLogout = () => {
        axios.get('https://zen-fsd-project-backend.onrender.com/auth/logout')
        .then(res => {
            if(res.data.status) {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <div>
        <h1>Welcome</h1>
        <button><Link to="/markdownPage">Markdown</ Link></button>
        <br/><br/>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
