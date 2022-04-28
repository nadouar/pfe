import React, { Component,useState } from 'react';
import axios from 'axios';
import login from '../../video/login.gif';
import './LoginSection.css';
import { Link } from 'react-router-dom';


class Login extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
           username: "",
           password: "",
           existe:false,
           


        }
    }

    componentDidMount(){
      
     
  }

    usernamehandler = (event) => {
        this.setState({
          username: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    usernameErrorhandler = (event) => {
      this.setState({
        usernameError: event.target.value
      })
  }
    submitAdmin=()=>{
     var username= this.state.username;
     var password=this.state.password;
     axios.post("http://localhost:8000/adminlogin",{username,password}).then(
          (response) => {
              console.log(response.data);
              if(response.data)
              {this.setState((state, props)=>{return {...state,existe:true} });
              alert("ok");
             Link("/Request");
            }else{alert("operation failed");
          }
          }
            , (error) => {
              console.log(error);
              alert("Operation failed");
          }
      )
      alert(this.state.username);
    }

    render() {
        return (
        <>
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
                    
                    <form onSubmit={this.submitAdmin} className='loginbox'>
                        <input type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="User ID..." required/>
                       
                        <br />
                       <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." required /><br /><br />
                        <div className='nav-bttn'>
                        {/*<Link to='/Request'className='nav-link'>*/}
                          <input type="submit" value="SEND" className='bttn--wide'/>
                          {/*</Link>*/}
                        </div>
                        <li className='nav-items'>
                            <Link to='/discover'className='nav-link'>
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
}

export default Login