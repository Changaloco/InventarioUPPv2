import React from 'react';
import Navbar from '../components/sidebar/Navbar';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
function Menu() {
  return (
    <>
    <Navbar/>
    <div>
      
      <div className='menu'>
      <h1>Home</h1>
      <h1>{sessionStorage.jwt}</h1>
    </div>

    <div>
    
    </div>
    </div>
    </>
  );
}

export default Menu;