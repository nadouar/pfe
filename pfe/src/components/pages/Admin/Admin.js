import React from 'react';
import AdminPage from '../../AdminPage';
import Footer from '../Footer/Footer';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Navbarlog from '../Admin/Navbarlog'



function Admin() {
  return (
<>    <Navbarlog/>
      <AdminPage {...homeObjOne} />
      <AdminPage {...homeObjThree} />
      <AdminPage {...homeObjTwo} />
      <AdminPage {...homeObjFour} />
      <Footer/>
    </>  )
}

export default Admin