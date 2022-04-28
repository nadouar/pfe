import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import FormClient from './components/pages/FormClient/FormClient';
import Admin from './components/pages/Admin/Admin';
import RequestPage from './components/pages/RequestPage/RequestPage';
import { AuthProvider } from './components/pages/AdminLogin/auth';
import Login from './components/pages/AdminLogin/Login';
import Request from './components/pages/AdminLogin/Request';
import Login1 from './components/pages/AdminLogin/Login1';
import RequireAuth from './components/pages/AdminLogin/RequireAuth';


function App() {
  return ( 
    <AuthProvider>
              <Router>
                {/*<Navbar />*/}
                  <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/Admin' exact element={<Admin />}/>
                    <Route path='/services' exact element={<Services />}/>
                    <Route path='/FormClient' exact element={<FormClient />}/>
                    <Route path='/RequestPage' exact element={<RequestPage />}/>
                    <Route path='/Login1' exact element={<Login1 />}/>
                    <Route path="/Request" exact element={<RequireAuth><Request/></RequireAuth>}/>
                  </Routes>
              </Router>
   </AuthProvider>
  );
}
export default App;