import React from 'react';
import './Services.css';
import workflow from '../../video/workflow.gif'
import Navbar from '../../Navbar';

function Services() {
    return (
      <>
        <Navbar/>
        <div>
          <div className='containerservice'>
              <div
                className='row home__service-row'
                style={{
                  display: 'flex'
                }}
              >
                <div className='col'>
              <div className='home__service-img-wrapper'>
                <img src={workflow} className='home__service-img' />
              </div>
            </div>
            <div className='col1'>
            <div className='home__service-text-wrapper'>
                <div className='top-line'>our services </div>
                <h1 className='heading dark'>
                  We make life easier !
                </h1>
                <p className='home__service-subtitle'>
                 We offer you the chance to make your life easier and save you time , thanks to the services we offert you don't have to go 
                 to the bank to send it .
                 We are giving you the chance to chose from 6 types that are :
                 
                 <p className='home__service-subtitle1'>
                   - Acces to information
                 </p>  
                
                 <p className='home__service-subtitle2'>
                   - Delete information
                 </p>  
                 
                 <p className='home__service-subtitle3'>
                   - Opposition
                 </p> 
                 
                 <p className='home__service-subtitle4'>
                   - Erasure or Rectification
                 </p> 
                 
                 <p className='home__service-subtitle5'>
                   - Portability of information
                 </p> 
                 
                 <p className='home__service-subtitle6'>
                   - Withdraw consent
                 </p>              
                </p>
                </div>

            </div>
                
              </div>
            </div>
          </div>
      </>
    );
  }

export default Services