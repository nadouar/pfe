import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
function AdminPage({
  lightBg1,
  topLine1,
  lightText1,
  lightTextDesc1,
  headline1,
  description1,
  buttonLabel1,
  img1,
  alt1,
  imgStart1
}) {
  return (
    <> 
       <div
        className={lightBg1 ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart1 === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine1}</div>
                <h1 className={lightText1 ? 'heading' : 'heading dark'}>
                  {headline1}
                </h1>
                <p
                  className={
                    lightTextDesc1
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description1}
                </p>
                <Link to='/Login1'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel1}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img1 src={img1} alt1={alt1} className='home__hero-img ' />
              </div>
            </div>
          </div>
        </div>
      </div> 
      
    </>
    
  );
}

export default AdminPage;