import axios from 'axios'
import '../App.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Markdown from './Markdown/Markdown_Viewer/Markdown'
const BASE_URL = process.env.BASE_URL;

function MarkdownPage() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(`${BASE_URL}/auth/verify`)
        .then(res => {
            if(res.data.status){

            } else {
                navigate('/')
            }
        })
    }, [])
  return (
    <div><Markdown/></div>
  )
}

export default MarkdownPage
