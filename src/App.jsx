import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import MarkdownPage from './components/MarkdownPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home}></Route>
        <Route path="/" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/forgotPassword" Component={ForgotPassword}></Route>
        <Route path="/resetPassword/:token" Component={ResetPassword}></Route>      
        <Route path="/markdownPage" Component={MarkdownPage}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
