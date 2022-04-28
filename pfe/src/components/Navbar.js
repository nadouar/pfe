import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSecurity} from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { useAuth } from './pages/AdminLogin/auth';




function Navbar() {
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
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <MdSecurity className='navbar-icon'/>
                    TrustTrans
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/'className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/discover'className='nav-links'onClick={closeMobileMenu}>
                            Discover
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        {button ? (
                            <Link to='/FormClient'className='btn-link'>
                                <Button buttonStyle='btn--outline'>
                                        Form
                                </Button>
                            </Link>
                        ):(
                            <Link to='/FormClient' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline'
                                buttonSize='btn--mobile'>Form</Button>
                            </Link>
                        )}
                    </li>
                    <li  className='nav-btn'>
                        
                            
                        {button ? (!auth.password &&(
                            <Link to='/Login1'className='btn-link'>
                                <Button buttonStyle='btn--outline'>
                                        Admin
                                </Button>
                            </Link>)
                        ):(!auth.password &&(
                            <Link to='/Login1' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline'
                                buttonSize='btn--mobile'>Admin</Button>
                            </Link>
                        ))}
                        
                    </li>

                </ul>
            </div>
            
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar;