import axios from 'axios'
import '../App.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Markdown from './Markdown/Markdown_Viewer/Markdown'
import MarkdownProvider from './Markdown/providers/markdown-provider'
import MainLayout from './Markdown/components/main-layout/main-layout'
import Editor from './Markdown/components/editor/editor'
import Preview from './Markdown/components/preview/preview'

function MarkdownPage() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('https://zen-fsd-project-backend.onrender.com/auth/verify')
        .then(res => {
            if(res.data.status){
                console.log(res.data.status);
            } else {
                navigate('/');
            }
            console.log(res);
        })
        .catch(res => {
            console.error(res);
        });
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
