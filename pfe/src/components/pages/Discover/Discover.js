import React from 'react';
import './Discover.css';
import gdpr from '../../images/gdpr.gif'

function Discover() {
  return (
    <>
    <div>
      <div className='containerdiscover'>
          <div
            className='row home__discover-row'
            style={{
              display: 'flex'
            }}
          >
            <div className='col'>
          <div className='home__discover-img-wrapper'>
            <img src={gdpr} className='home__discover-img' />
          </div>
        </div>
        <div className='col1'>
        <div className='home__discover-text-wrapper'>
            <div className='top-line'>our discovers </div>
            <h1 className='heading dark'>
              We make life easier !
            </h1>
            </div>

        </div>
            
          </div>
        </div>
      </div>
  </>  )
}

export default Discover