import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            
          <Route path='/signup' element={<SignUp/>}></Route>
           <Route path='/signin' element={<SignIn/>}></Route> 
          <Route path='/send' element={<SendMoney/>}></Route> 
           <Route path='/dashboard' element={<Dashboard/>}></Route> 
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
