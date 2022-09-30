import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Story from './components/Story/Story'
import Post from './components/Post/Post'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeaderWrapper from './pages/HeaderWrapper/HeaderWrapper'
import PostsStoryPage from './pages/PostsStoryPage/PostsStoryPage'
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import AddNewPostPage from './pages/AddNewPostPage/AddNewPostPage'

function App() {
  return(
    <div className='App'>
        <Routes>
          <Route path='/inst' element={<HeaderWrapper />}>
            <Route index element={<PostsStoryPage />}/>
            <Route path='chat' element={<ChatPage />}/>
            <Route path='addPost' element={<AddNewPostPage />}/>
            <Route path='profile' element={<ProfilePage />}/>
          </Route>
            <Route path='/' element={<LoginPage />}/>
          <Route path='*' element={<h2>Error 404</h2>}/>
        </Routes>
    </div>
    
  )
}

export default App