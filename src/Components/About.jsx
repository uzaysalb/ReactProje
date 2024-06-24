import React from 'react';
import aboutimage from '../images/lmt-sirket.webp';
function About() {
  return (
    <div className='about'>
      <div className='about-model'>
<img src={aboutimage} alt=''></img>
    </div>
    <div className='about-text'>
<h2>WEARE THE BEST <br/> REAL ESTATE COMPANY</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nihil ex sunt magni et, placeat molestias, assumenda doloribus optio, iure nisi! Recusandae vel earum quia sunt fugiat perferendis voluptate iusto tenetur suscipit id officiis consequuntur, aspernatur soluta alias cupiditate magnam vero illum commodi dolor. Ducimus ut quae deleniti, assumenda illo iusto nobis perferendis atque temporibus exercitationem tenetur corporis earum dolorum.</p>
<button>View More Details</button>
    </div>
    </div>
  );
};

export default About;