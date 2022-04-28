import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSecurity} from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../Button';
import './Navbarlog.css';
import { IconContext } from 'react-icons/lib';
import { useAuth } from '../AdminLogin/auth';

function Navbarlog() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    useEffect(() => {
      showButton();
      window.addEventListener('resize', showButton);
    }, []);

    const auth = useAuth();
  return (
    <>
          <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbarlog'>
            <div className='navbarlog-container container'>
            <Link to='/' className='navbarlog-logo' onClick={closeMobileMenu}>
                    <MdSecurity className='navbar-icon'/>
                    TrustTrans
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars className='fa-bars'/>}
                </div>
                <ul className={click ? 'navlog-menu active' : 'navlog-menu'}>
                    <li className='navlog-item'>
                        <Link to='/admin'className='navlog-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>  
                    <li className='navlog-item'>
                        <Link to='/Request'className='navlog-links'onClick={closeMobileMenu}>
                            Requests
                        </Link>
                    </li>
                    <li className='navlog-item'>
                        <Link to="/admin" className='navlog-links' onClick={closeMobileMenu}>
                            Statics
                        </Link>
                    </li>
                </ul>
            </div> 
        </div>
        </IconContext.Provider>
    </>
  )
}
export default Navbarlog;