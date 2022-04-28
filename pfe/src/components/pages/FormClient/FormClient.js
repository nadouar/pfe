import React, { Component,useState } from 'react';
import axios from 'axios';
import sec_inn from '../../video/sec-inn.gif';
import './formSection.css';
import { Link } from 'react-router-dom';
import { getActiveElement } from 'formik';
import Navbar from '../../Navbar';


class FormClient extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
           idcard: "",
           accountnumber: "",
           type: "",
           comment: "",
            existe:false,


        }
    }

    componentDidMount(){
      
     
  }

    IdCardhandler = (event) => {
        this.setState({
          idcard: event.target.value
        })
    }
    AccountNumberhandler = (event) => {
        this.setState({
            accountnumber: event.target.value
        })
    }

    typehandler = (event) => {
        this.setState({
            type: event.target.value
           
        })
    
    }
      commenthandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

   


    submitRequest=()=>{
     var idcard= this.state.idcard;
     var accountnumber=this.state.accountnumber;
     var type=this.state.type;
     var comment=this.state.comment;
     axios.post("http://localhost:8000/request",{idcard,accountnumber,type,comment}).then(
          (response) => {
              console.log(response.data); 
               if(!response.data)
               {this.setState((state, props)=>{return {...state,existe:true} });
               alert ("first")}
               else {  alert("second");
                  alert("request Added Successfully");}
          }, (error) => {
              console.log(error);
              alert("Operation failed");
          }
      )
      alert(this.state.type);
    }

    render() {
        return (
        <>
        <Navbar/>
          <div>
            <div className='container'>
              <div
                className='row home__client-row'
                style={{
                  display: 'flex'
                }}
              >
                <div className='col'>
                  <div className='home__client-text-wrapper'>
                    <h1 className='head'>
                    Client Request
                    </h1>
                    
                    <form onSubmit={this.submitRequest} className='Singinbox'>
                      {this.existe&&<div>you're not a costumer</div>}
                        <input type="text" value={this.state.idcard} onChange={this.IdCardhandler} placeholder="ID Card Number..." pattern="[0-9]*" maxLength="8" minLength="8"required/><br />
                       <input type="text" value={this.state.accountnumber} onChange={this.AccountNumberhandler} placeholder="Account Number..." pattern="[0-9]*" maxLength="20" minLength="20"required /><br />

                        <div>
                            
                            <select onChange={this.typehandler} value={this.state.type}className="custom-select" >
                                <option Value="">Select type</option>
                                <option value="Access to information">Access to information</option>
                                <option value="Delete information request">Delete information request</option>
                                <option value="Opposition request">Opposition request</option>
                                <option value="Erasure or rectification request">Erasure or rectification request</option>
                                <option value="Portability request">Portability request</option>
                                <option value="Withdraw consent request">Withdraw consent request</option>
                             </select>   
                        </div>
          
                        <br />
                        <textarea value={this.state.comment} onChange={this.commenthandler} placeholder="comment..." className='comment' required/>
                        <div className='nav-bttn'>
                          <input type="submit" value="SEND" className='bttn--wide'/>
                        </div>
                        <li className='nav-items'>
                            <Link to='/discover'className='nav-link'>
                            {'>>'} You already sent a request pursuit it here !
                            </Link>
                        </li>
                        

                      </form>
                  </div>
                </div>
                <div className='col'>
                  <div className='home__client-img-wrapper'>
                    <img src={sec_inn} className='home__client-img' />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
            
        )
    }
}

export default FormClient