import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-scroll/modules/components/Button';
import Navbarlog from '../Admin/Navbarlog';
import { useAuth } from './auth'
export default function Request() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout =()=>{
    auth.logout();
    navigate('/Admin');
  }
  return (
    <div>
      <Navbarlog/>
      welcome {auth.username}
      <button onClick={handleLogout}>logout</button>
    </div>

  )
}
