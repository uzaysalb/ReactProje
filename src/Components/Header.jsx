import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header'>
<Navbar/>
<div className='intro'>
<p>Looking for a Property !</p>
<h1><span>BUY</span><span>SELL</span>PROPERTIES</h1>
<p className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur beatae quia sint est maiores sequi nostrum deleniti ipsam laudantium?</p>
<a href='#' className='header-btn'>Details</a>
</div>
    </div>
  );
};

export default Header;