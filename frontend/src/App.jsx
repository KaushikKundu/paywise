import React from 'react';
import {SignUp,SignIn,SendMessage,Dashboard} from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div>
        <Router>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/signin' element={<SignUp/>}></Route>
          <Route path='/send' element={<SignUp/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Router>
    </div>
  )
}

export default App
