import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './routes/Home'
import About from './routes/About.jsx'
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn'
import Board from './routes/Board'

const App = () => {
  return (
    < >
    <Routes>
      <Route path='/' element={<Home />}>
      <Route path='/signup' element={<About />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signup' element={<SignIn />}/>
      <Route path='/signup' element={<Board />}/>
      </Route>
      </Routes>
    </>
  )
}

export default App