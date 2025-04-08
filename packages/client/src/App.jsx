import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './routes/Home'
import About from './routes/About.jsx'
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn'
import Posts from './routes/Posts'
import AddPost from './routes/AddPost'
import PostDetail from './routes/PostDetail'

const App = () => {
  return (
    < >
    <Routes>
      <Route path='/' element={<Home />}>
      <Route path='/about' element={<About />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/post/:id' element={<PostDetail />}/>
      </Route>
      <Route path='/addPost' element={<AddPost/>}/>
      </Routes>
    </>
  )
}

export default App