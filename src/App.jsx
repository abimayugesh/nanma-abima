import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp__Page/Index'

import Login from './pages/Login_Page/index'
import PasswordReset from './pages/Password_Reset_Page/index'
import {routes} from './constants/routes'

const App = () => {
  return (
    
    
<Router>
  <Routes>
    <Route path={routes.signIn()} element={<Login/>}/>
    <Route path={routes.signUp()} element={<SignUp/>} />
    <Route path={routes.resetPass()} element={<PasswordReset/>} />
  </Routes>
</Router>


  )
}

export default App
