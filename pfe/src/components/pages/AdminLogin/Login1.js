import React, {useState} from 'react';
import{useAuth} from './auth';
import {useNavigate, useLocation,Navigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import login from '../../video/login.gif';
import Navbar from '../../Navbar';
import axios from 'axios';

function Login1() {
    const[username, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[existe, setExiste]= useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const redirectPath = location.state?.path || '/Admin'

   
    const submitAdmin=()=>{
      const handleLogin = () =>{
        auth.login(username);
       navigate(redirectPath,{replace: true});

   }

           axios.post("http://localhost:8000/adminlogin",{username,password}).then(
          (response) => {
              console.log(response.data);
              if(!response.data!="")
              {this.setState((state, props)=>{return {...state,existe:true} });
              alert("first");
            }else{
              alert("operation");
              
               handleLogin();
          }

          }
            , (error) => {
              console.log(error);
              alert("Operation failed");
          }
      )
    }


  return (
    <>
    <Navbar/>
    <div>
      <div className='Logincontainer'>
        <div
          className='row home__Login-row'
          style={{
            display: 'flex'
          }}
        >
          <div className='col'>
            <div className='home__Login-text-wrapper'>
              <h1 className='head'>
              Administration Login
              </h1>
              <form className='loginbox' onSubmit={submitAdmin}>
                  <input type="text" onChange={(e) => setUser(e.target.value)} value={username} placeholder="User ID..." required/><br />
                 <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password..." required/><br /><br />
                  <div className='nav-bttn'>
                    <input type="submit" value="LOGIN" className='bttn--wide' />
                  </div>
                  <li className='nav-items'>
                      <Link to='/'className='nav-link'>
                      {'>>'} If you are not an administrator click here !
                      </Link>
                  </li>
                </form>
            </div>
          </div>
          <div className='col'>
            <div className='home__Login-img-wrapper'>
              <img src={login} className='home__Login-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}
export default Login1;//return navigate.push("/Admin");
              //return <Navigate to="/request"/>;
              //auth.login(username);
             // navigate(redirectPath,{replace: true});
             //return props.history.push("/request");