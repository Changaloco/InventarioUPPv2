import React from 'react';
import {Link} from 'react-router-dom';
import useUser from '../../hooks/useUser';

export default function Header(){
const {isLoggedIn} = useUser();


return(
  <Header>
    <Link to='/menu'>Menu</Link>
    <Link to='/menu'>Logout</Link>


  </Header>
);
}