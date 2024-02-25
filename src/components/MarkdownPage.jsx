import axios from 'axios'
import '../App.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Markdown from './Markdown/Markdown_Viewer/Markdown'
import MainLayout from '../components/main-layout/main-layout';
import Editor from '../components/editor/editor';
import Preview from '../components/preview/preview';
import MarkdownProvider from '../providers/markdown-provider';

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
    <div>
    <MarkdownProvider>
    <MainLayout>
      <MainLayout.Column>
        <Editor />
      </MainLayout.Column>
      <MainLayout.Column>
        <Preview />
      </MainLayout.Column>
    </MainLayout>
    </MarkdownProvider>
    </div>
  )
}

export default MarkdownPage
