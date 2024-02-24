import axios from 'axios'
import '../App.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Markdown from './Markdown/Markdown_Viewer/Markdown'

function MarkdownPage() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('https://zen-fsd-project-backend.onrender.com/auth/verify')
        .then(res => {
            if(res.data.status){
                console.log(res.data.status);
            } else {
                navigate('/')
            }
            console.log(res);
        })
    }, [])
  return (
    <div><Markdown/></div>
  )
}

export default MarkdownPage
