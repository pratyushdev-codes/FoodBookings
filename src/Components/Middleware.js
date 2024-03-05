import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSPL from './NabarSPL';
import './Middleware.css'; // Import the CSS file

function Middleware() {
  return (
    <div id="about" style={{ // Add the id attribute here
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px', // Added padding for better spacing
    }}>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
      }}>
          <br/>
   <img src="./images/Food Services.png" style={{width:"100%", height:"auto", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}}/>
          
          Choose you favourite restaurant</h2>
      <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign: 'center' // Center alignment
      }}>
      Choose your favourite restaurante to enjoy your hot deals!
      </p>
    </div>
  );
}

export default Middleware;